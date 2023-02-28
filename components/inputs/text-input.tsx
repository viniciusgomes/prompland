export default function TextInput({ handle, title, placeholder }: { handle: any, title: string, placeholder: string }) {
  const titleId = title.toLowerCase().replace(/\s/g, "");

  const setData = (d: any) => {
    handle(d)
  }

  return (
    <div>
      <label htmlFor={titleId} className="block text-sm text-left font-medium text-gray-700">
        {title}
      </label>
      <input
        type="text"
        name={titleId}
        id={titleId}
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder={placeholder}
        aria-describedby={title}
        onChange={e => setData(e.target.value)}
      />
    </div>
  )
}