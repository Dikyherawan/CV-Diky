import foto from "../myphoto.jpg";

export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
            <h1 className="text-gray-300 font-bold">CV ONLINE </h1>
            <h2 className="text-3xl">Diky Herawan</h2>
            <Profile />
            <p>
          Saya adalah seorang mahasiswa yang sedang belajar dalam membangun aplikasi web
          dan mobile. Saya selalu berusaha memberikan solusi terbaik untuk
          tugas yang diberikan.
        </p>
        </div>
    );
}

function Profile (){
    return <img src={foto.src} alt="Diky Profile" className="fotoku"/>;
  }