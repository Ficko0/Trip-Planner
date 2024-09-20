import { ArrowPathIcon } from "@heroicons/react/20/solid";

export default function LoadingIcon() {
  return (
    <div className="flex justify-center items-center h-full">
      <ArrowPathIcon className="animate-spin h-30 w-30 size-10" />
    </div>
  );
}
