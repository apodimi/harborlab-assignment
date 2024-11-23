interface ErrorMessageProps {
  hidden: boolean | undefined;
}

export const ErrorMessage = ({ hidden }: ErrorMessageProps) => {
  return (
    <div className="text-red-500 text-center p-4" hidden={hidden}>
      Oops! Something went wrong. Please try again later.
    </div>
  );
};
