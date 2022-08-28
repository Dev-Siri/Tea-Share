declare module "react-file-base64" {
  const FileBase64: React.FC<{
    id?: string;
    multiple?: boolean;
    onDone: ({ base64 }: { base64: string; }) => void;
  }>;
  export default FileBase64;
}