import BlogList from "./BlogList";
import Footer from "./Footer";
import useFetch from "./UseFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} />}
      {blogs&&<Footer/>}
    </div>
  );
}
 
export default Home;