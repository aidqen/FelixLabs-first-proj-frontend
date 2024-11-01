import { MdOutlineEmail } from "react-icons/md";

export function ProfilePreview({}) {
     
    return (
        <div className="flex flex-row justify-start items-center h-[2.5em] pl-5 gap-3 cursor-pointer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg" alt="user-img" className="h-full rounded-full" />
        <div className="flex flex-col items-start justify-start">
          <h3 className="text-[1em] font-semibold text-black">Idan Markin</h3>
          <p className="flex flex-row items-center gap-1 text-[0.812em] text-[#535353] font-light">
            <MdOutlineEmail />
            <span>idanmarkin8@gmail.com</span>
          </p>
        </div>
      </div>
    )
}