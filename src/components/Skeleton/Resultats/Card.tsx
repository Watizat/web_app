export default function Card() {
  return (
    <li className="z-10 flex flex-col w-full list-none bg-white rounded-lg shadow-md animate-pulse ">
      <div className="flex flex-col flex-1 space-y-4 p-6">
        <div className="space-x-2 flex items-center justify-center flex-1">
          <div className=" w-8 h-8 align-middle rounded-full bg-gray-200" />
          <div className="flex flex-col w-full space-y-2">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-8/12 " />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2/5 " />
          </div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-12/12 " />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-12/12 " />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-12/12 " />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-7/12 " />
        </div>
        <div className="flex space-x-1.5">
          <div className=" w-5 h-5 align-middle rounded-full bg-gray-200" />
          <div className=" w-5 h-5 align-middle rounded-full bg-gray-200" />
          <div className=" w-5 h-5 align-middle rounded-full bg-gray-200" />
          <div className=" w-5 h-5 align-middle rounded-full bg-gray-200" />
          <div className=" w-5 h-5 align-middle rounded-full bg-gray-200" />
          <div className=" w-5 h-5 align-middle rounded-full bg-gray-200" />
        </div>
      </div>

      <div className="flex w-full h-10 border-t border-gray-200 divide-x divide-gray-200">
        <div className="basis-1/ flex items-center justify-center flex-1">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-7/12 " />
        </div>
        <div className="basis-1/ flex items-center justify-center flex-1">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-7/12 " />
        </div>
        <div className="basis-1/ flex items-center justify-center flex-1">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-7/12 " />
        </div>
      </div>
    </li>
  );
}
