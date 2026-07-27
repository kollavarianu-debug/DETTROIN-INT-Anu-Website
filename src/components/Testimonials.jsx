function Testimonials() {

const testimonials = [

{
name:"Rahul Sharma",
role:"Parent",
review:"The teachers are caring and my child enjoys learning every day."
},

{
name:"Ananya Verma",
role:"Student",
review:"The campus is beautiful and the activities help us learn beyond books."
},

{
name:"Priya Singh",
role:"Parent",
review:"Excellent education, modern classrooms and supportive staff."
}

];

return(

<section 
 id="testimonials"
 className="bg-white py-16">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center text-blue-900">
What People Say
</h2>

<p className="text-center text-gray-600 mt-3 mb-12">
Hear from our students and parents.
</p>

<div className="grid md:grid-cols-3 gap-8">

{testimonials.map((item,index)=>(

<div
key={index}
className="bg-gray-50 rounded-xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
>

<div className="text-yellow-500 text-xl mb-3">
★★★★★
</div>

<p className="text-gray-600 italic mb-5">
"{item.review}"
</p>

<h3 className="font-bold text-blue-900">
{item.name}
</h3>

<p className="text-sm text-gray-500">
{item.role}
</p>

</div>

))}

</div>

</div>

</section>

)

}

export default Testimonials;