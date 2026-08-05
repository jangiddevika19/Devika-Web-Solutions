import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Send,
  Code2,
  Server,
  PenTool,
  Gauge,
} from "lucide-react";

import {
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";


const SERVICES = [
  {
    icon: Code2,
    label: "Website Development",
  },
  {
    icon: Server,
    label: "Full Stack Development",
  },
  {
    icon: PenTool,
    label: "UI/UX Design",
  },
  {
    icon: Gauge,
    label: "Website Optimization",
  },
];


const SOCIALS = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devika-jangid/",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/codingwithdvk",
  },
];


const inputClasses = `
w-full rounded-xl border border-slate-200 bg-white
px-4 py-3 text-sm text-slate-700
placeholder:text-slate-400 outline-none
transition-all duration-300
focus:border-sky-300 focus:ring-4 focus:ring-sky-100
`;


export default function Contact(){

const [form,setForm] = useState({
name:"",
email:"",
phone:"",
service:"",
message:"",
});


const [loading,setLoading] = useState(false);
const [success,setSuccess] = useState("");



const handleChange=(e)=>{
setForm({
...form,
[e.target.name]:e.target.value
});
};



const handleSubmit=async(e)=>{

e.preventDefault();

setLoading(true);


try{


await emailjs.send(
"service_mkjrjyp",
"template_li5zdeq",
form,
{
publicKey: "_WgZhn1NzggSPGWvl"
}
);


setSuccess("Message sent successfully!");


setForm({
name:"",
email:"",
phone:"",
service:"",
message:"",
});


}

catch(error){

console.log(error);
setSuccess("Something went wrong. Try again.");

}

finally{

setLoading(false);

}

};



return(

<section
id="contact"
className="
relative overflow-hidden
bg-white py-24 sm:py-28
"
>


<div className="
absolute inset-0 -z-10
bg-gradient-to-b
from-sky-50 via-white to-white
"/>



<div className="
mx-auto max-w-6xl px-6
">


<div className="
mx-auto max-w-2xl text-center
">


<span className="
inline-flex rounded-full
border border-slate-200
bg-white px-4 py-1.5
text-xs text-slate-500 shadow-sm
">
Contact
</span>


<h2 className="
mt-5 text-4xl font-semibold text-slate-900
">

Let's Build Something

<span className="text-sky-600">
 Amazing
</span>

</h2>


<p className="
mt-4 text-slate-500
">
Have a project idea? Let's discuss and create a modern digital solution.
</p>


</div>



<div className="
mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5
">


{/* LEFT */}

<div className="
space-y-6 lg:col-span-2
">


<div className="
rounded-3xl border border-slate-200
bg-white p-6 shadow-sm
">


<div className="
flex h-12 w-12 items-center
justify-center rounded-xl
bg-sky-50 text-sky-600
">

<Mail/>

</div>


<p className="
mt-4 text-xs uppercase text-slate-400
">
Email
</p>


<a
href="mailto:devika1909jangid19@gmail.com"
className="
font-semibold text-slate-800 hover:text-sky-600
"
>
devika1909jangid19@gmail.com
</a>


</div>



<div className="
rounded-3xl border border-slate-200
bg-white p-6 shadow-sm
">


<p className="
text-xs uppercase text-slate-400
">
Services
</p>


<div className="mt-5 space-y-3">


{
SERVICES.map(({icon:Icon,label})=>(

<div
key={label}
className="
flex items-center gap-3
text-sm text-slate-600
"
>

<span className="
flex h-9 w-9 items-center
justify-center rounded-lg
bg-sky-50 text-sky-600
">

<Icon size={17}/>

</span>

{label}

</div>

))
}


</div>

</div>




<div className="
rounded-3xl border border-slate-200
bg-white p-6 shadow-sm
">


<p className="
text-xs uppercase text-slate-400
">
Follow Me
</p>


<div className="
mt-5 grid grid-cols-2 gap-3
">


{
SOCIALS.map(({icon:Icon,label,href})=>(

<a
key={label}
href={href}
target="_blank"
rel="noreferrer"
className="
flex items-center justify-center gap-2
rounded-xl border border-slate-200
px-3 py-3 text-sm
font-medium text-slate-600
hover:bg-sky-50 hover:text-sky-600
transition
"
>

<Icon/>

{label}

</a>

))
}


</div>


</div>


</div>




{/* FORM */}

<div className="
lg:col-span-3
">


<form
onSubmit={handleSubmit}
className="
rounded-3xl border border-slate-200
bg-white p-8
shadow-[0_20px_50px_rgba(15,23,42,.08)]
"
>


<div className="
grid grid-cols-1 gap-5 sm:grid-cols-2
">


<input
name="name"
required
value={form.name}
onChange={handleChange}
placeholder="Your Name"
className={inputClasses}
/>


<input
name="email"
type="email"
required
value={form.email}
onChange={handleChange}
placeholder="Email Address"
className={inputClasses}
/>


<input
name="phone"
type="tel"
required
pattern="[0-9]{10}"
value={form.phone}
onChange={handleChange}
placeholder="Phone Number"
className={inputClasses}
/>


<select
name="service"
required
value={form.service}
onChange={handleChange}
className={inputClasses}
>

<option value="">
Select Service
</option>

<option>
Website Development
</option>

<option>
Full Stack Development
</option>

<option>
UI/UX Design
</option>

<option>
Website Optimization
</option>


</select>



<textarea
name="message"
required
rows="5"
value={form.message}
onChange={handleChange}
placeholder="Your Message"
className={`${inputClasses} sm:col-span-2`}
/>


</div>



<button
disabled={loading}
className="
mt-6 flex items-center justify-center
gap-2 rounded-full bg-slate-900
px-7 py-3 font-semibold text-white
hover:bg-slate-800 transition
disabled:opacity-50
"
>


{loading ? "Sending..." : "Send Message"}

<Send size={16}/>


</button>



{
success && (

<p className="
mt-4 text-sm font-medium text-sky-600
">
{success}
</p>

)
}



</form>


</div>


</div>


</div>


</section>

);

}