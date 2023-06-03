import reactThreeTestRenderer from "@react-three/test-renderer";
import EfficiencySpark from "../sparkAnimation/efficiencySpark";

test("Something", async () => {
  const renderer = await reactThreeTestRenderer.create(
    <EfficiencySpark />
  );
  console.log(renderer);
  console.log(renderer);
});
