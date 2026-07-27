import aboutImage from "../assets/images/about.jpg";
import labImage from "../assets/images/lab.jpg";
import libraryImage from "../assets/images/library.jpg";
import sportsImage from "../assets/images/sports.jpg";

function Gallery() {

    const images = [
  aboutImage,
  labImage,
  libraryImage,
  sportsImage,
];

return(
<section
id="gallery"
 className="py-16 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center text-blue-900">
Gallery
</h2>

<p className="text-center text-gray-600 mt-3 mb-10">
A glimpse of our campus and student life.
</p>

<div className="grid md:grid-cols-2 gap-6">

{images.map((image,index)=>(
<div
key={index}
className="overflow-hidden rounded-xl shadow-lg"
>

<img
src={image}
alt=""
className="w-full h-64 object-cover hover:scale-110 transition duration-500"
/>

</div>
))}

</div>

</div>

</section>
)

}

export default Gallery;