import HomeContainer from "./components/home/home-container";
import { selectableLangs } from "@/core/layouts/selectable-langs";

export default function Home() {
  return <HomeContainer langs={selectableLangs} />;
}
