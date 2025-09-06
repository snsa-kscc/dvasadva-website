const MoviePage = () => {
  return (
    <div className="min-h-screen bg-stone-800 text-zinc-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">
            Movie Showcase
          </h1>
          <p className="text-lg text-stone-300">
            Experience our latest video content
          </p>
        </div>

        {/* Video Player Section */}
        <div className="max-w-4xl mx-auto">
          <video
            className="w-full h-auto rounded-lg shadow-lg"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/sample-video.mp4" type="video/mp4" />
            Your browser does not support the video tag. Please add an MP4 file to the public directory.
          </video>
        </div>

        {/* Simple Info */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <p className="text-stone-300">
            Video will autoplay on page load. Add your MP4 file to the /public directory and update the src attribute.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
