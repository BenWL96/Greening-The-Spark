import reactThreeTestRenderer from "@react-three/test-renderer";
import EfficiencySparkAnimation from "../sparkAnimation/efficiencySparkAnimation";

test("Something", async () => {
  const renderer = await reactThreeTestRenderer.create(
    <EfficiencySparkAnimation />
  );
  console.log(renderer);
  console.log(renderer);
});
