import { Feed } from "@/components/feed/Feed";
import { Tag } from "@/types/types";

const GradlePage = () => {
  return <Feed tags={[Tag.GRADLE]} />;
};

export default GradlePage;
