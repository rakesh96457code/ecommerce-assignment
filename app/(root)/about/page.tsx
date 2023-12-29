import Footer from "@/components/footer";
import Navbar from "@/components/nav-bar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-gray-800 text-white text-center py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
            <p className="text-lg">
              Learn more about who we are and what we do.
            </p>
          </div>
        </header>

        <section className="container mx-auto my-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>

        <section className="bg-gray-200 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-4 shadow-md rounded-md">
                <img
                  src="https://scontent.fslv1-2.fna.fbcdn.net/v/t1.6435-9/59623158_933587826811848_2375368896124289024_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=r-mXrdS68z4AX_1lxjN&_nc_ht=scontent.fslv1-2.fna&oh=00_AfA2YSXTyzCXOeMBnz9ySdYtOMurG7vDOBen8O6MNUIVxQ&oe=65B6557B"
                  alt="Team Member 1"
                  className="w-full h-40 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-bold mb-2">Rakesh Kumar</h3>
                <p className="text-gray-600">Co-Founder & CEO</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
