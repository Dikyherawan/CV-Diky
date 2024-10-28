export default function RiwayatPendidikan() {
    return (
<div className="container mx-auto p-2 text-center pt-20">
  <h2 className="text-2x1">Riwayat Pendidikan</h2>
  <RowRiwayat jenjang="SD" sekolah="SDN Pamoyanan" tahun="2009-2015" />
  <RowRiwayat jenjang="SMP" sekolah="SMPN 2 Rancaekek" tahun="2015-2018" />
  <RowRiwayat jenjang="SMK" sekolah="SMK Guna Dharma Nusantara" tahun="2018-2021" />
  <RowRiwayat jenjang="S1" sekolah="Universitas Ma'soem" tahun="2022-Sekarang" />
  </div>
    );
}

interface RowRiwayatProps {
    jenjang: string;
    sekolah: string;
    tahun: string;
}
function RowRiwayat(props: RowRiwayatProps) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
          <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
          <div className="col-span-12 md:col-span-4">{props.tahun}</div>
          </div>
        </div>
      </div>
    );
  }
