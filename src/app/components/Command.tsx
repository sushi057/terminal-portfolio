export default function Command() {
  return (
    <form className="flex flex-row">
      <p className="mr-auto min-w-fit text-green-500">
        sushi@linux-desktop<span>:~$</span>
      </p>
      <input type="text" className="ml-2 w-full bg-inherit outline-none" />
    </form>
  );
}
