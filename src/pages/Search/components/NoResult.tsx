interface NoResultProps {
  hidden: boolean | undefined;
}
export const NoResult = ({ hidden = true }: NoResultProps) => {
  return (
    <div className="text-center p-4" hidden={hidden}>
      No results found. Try searching for something else.
    </div>
  );
};
