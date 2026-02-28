import { motion as m } from "framer-motion";
export default function Footer() {
  return (
    <div className="w-full mt-60  bg-gray-950/50 backdrop-blur-xs text-white py-4  text-center text-xs lg:text-sm flex  justify-around items-center z-250">
      <div
   
        className=" flex-col justify-center items-center "
      >
        <h3 className="text-red-500">SANT SADURNÍ D'ANOIA</h3>
        <p>Assesora Mònica</p>
        <a target="_blanck" href="https://maps.app.goo.gl/ueCLphyjmdr5Mpe89">
          C/ Mestre Antoni Torelló. 6
        </a>
        <p>08770 / BCN</p>
        <a href="tel:938911404">
          <p>Tel. 93 891 14 04 </p>
        </a>
        <p></p>
        <a
          href="mailto:tapissatsanoia@gmail.com"
          className="text-red-500 hover:underline"
        >
          tapissatsanoia@gmail.com
        </a>
      </div>
      <div
      
        className="flex-col justify-center text-center items-center"
      >
        <h3 className="text-red-500">VILAFRANCA DEL PENEDÈS</h3>
        <p>Assessora: Anna</p>
        <a target="_blanck" href="https://maps.app.goo.gl/y4frpEZSFENbCDFZ9">
          Plaça de Josep Anselm Clavé, 12
        </a>
        <p>08720 / BCN</p>
        <a href="tel:930428166">
          <p>Tel. 93 042 81 66</p>
        </a>
        <p></p>
        <a
          href="mailto:somnisvilafranca@gmail.com"
          className="text-red-500 hover:underline"
        >
          somnisvilafranca@gmail.com
        </a>
      </div>
    </div>
  );
}
