'use client';
import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    const logWebVital = (metric) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('📊 Web Vital:', {
          name: metric.name,
          value: Math.round(metric.value),
          rating: getVitalRating(metric.name, metric.value),
          unit: metric.name === 'CLS' ? '' : 'ms'
        });
      }
    };

    const getVitalRating = (name, value) => {
      const thresholds = {
        LCP: { good: 2500, poor: 4000 },
        FID: { good: 100, poor: 300 },
        CLS: { good: 0.1, poor: 0.25 },
        FCP: { good: 1800, poor: 3000 }
      };
      
      const threshold = thresholds[name];
      if (!threshold) return 'unknown';
      
      if (value <= threshold.good) return '🟢 good';
      if (value <= threshold.poor) return '🟡 needs improvement';
      return '🔴 poor';
    };

    const measurePageLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      
      if (navigation) {
        const metrics = {
          loadTime: Math.round(navigation.loadEventEnd - navigation.fetchStart),
          ttfb: Math.round(navigation.responseStart - navigation.fetchStart),
          domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
          transferSize: navigation.transferSize ? Math.round(navigation.transferSize / 1024) : 0,
        };
        
        console.log('🚀 Page Performance:', {
          ...metrics,
          loadTime: metrics.loadTime + 'ms',
          ttfb: metrics.ttfb + 'ms (' + (metrics.ttfb < 800 ? '🟢' : '🔴') + ')',
          domContentLoaded: metrics.domContentLoaded + 'ms',
          transferSize: metrics.transferSize + 'KB'
        });
      }
    };

    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        logWebVital({
          name: 'LCP',
          value: lastEntry.startTime,
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          logWebVital({
            name: 'FID',
            value: entry.processingStart - entry.startTime,
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        if (clsValue > 0) {
          logWebVital({
            name: 'CLS',
            value: clsValue,
          });
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCP
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            logWebVital({
              name: 'FCP',
              value: entry.startTime,
            });
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
    }

    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    return () => {
      window.removeEventListener('load', measurePageLoad);
    };
  }, []);

  return null;
}