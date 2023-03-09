import type { LayoutComponent } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create a Post",
  description: "Create a post and share it with the World on Tea Share",
};

const CreateLayout: LayoutComponent = ({ children }) => children;

export default CreateLayout;
