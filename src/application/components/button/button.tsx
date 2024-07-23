import './button.css'
export function CvButton({Uri, Message}: any)
{
    return <>
        <a 
            type="button"
            href={Uri}
            target="_blank"
            className="
            ml-2
            size-button
            text-white 
            bg-gradient-to-r 
            from-purple-500 
            to-pink-500 
            hover:bg-gradient-to-l 
            focus:ring-4 
            font-medium rounded-lg 
            text-lg px-5 py-3 
            text-center me-2 mb-2">
                {Message}
        </a>    
</>
}