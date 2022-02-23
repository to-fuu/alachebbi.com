export const BlogCard = () =>
(
    <div className="block overflow-clip rounded-2xl shadow-md bg-slate-800 hover:shadow-xl hover:-translate-y-1 duration-300 cursor-newtab">
        <img className="object-cover w-full h-32" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />

        <div className="p-4 relative overflow-clip before:bg-[url(/images/mesh-1.png)] before:absolute before:inset-0 before:bg-cover before:mix-blend-overlay before:opacity-100 before:animate-hue-rotate">
            <div className='absolute inset-0 bg-[url(/images/noise.png)] bg-repeat' />
            <div className="relative">
                <p className="text-xs text-gray-500">website.com</p>
                <h5 className="text-sm text-white">How to position your furniture for positivity</h5>
                <p className="mt-1 text-xs text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nobis aliquid accusamus? Sint, sequi voluptas.</p>
            </div>
        </div>
    </div>
)