
let frm = document.getElementById("online");
let listjabatan = ["Manager", "Asisten Manager", "Staff"];
let liststatus = ["Menikah", "Belum Menikah"];
let pilihjabatan = `<option value=""> Pilihan Jabatan ----</option>`;
let pilihstatus = `<option value=""> Pilihan Status ----</option>`;
for (let j in listjabatan) {
  pilihjabatan += `<option value="${listjabatan[j]}">${listjabatan[j]}</option>`;
}
for (let s in liststatus) {
  pilihstatus += `<option value="${liststatus[s]}">${liststatus[s]}</option>`;
}

frm.jabatan.innerHTML = pilihjabatan;
frm.status.innerHTML = pilihstatus;
function transaksi() {
  let pegawai = frm.pegawai.value;
  let jabatan = frm.jabatan.value;
  let status = frm.status.value;
  let gajipokok = 0;

  if (jabatan == "Manager") {
    gajiPokok = 15000000;
  } else if (jabatan == "Asisten Manager") {
    gajiPokok = 10000000;
  } else if (jabatan == "Staff") {
    gajiPokok = 5000000;
  } else {
    gajiPokok = 0;
  }
  let tunjanganJabatan = 0.15 * gajiPokok;

  let tunjanganBpjs = 0.1 * gajiPokok;
  let tunjanganKeluarga = status == "Menikah" ? 0.2 * gajiPokok : 0;

  let totalTunjangan = tunjanganJabatan + tunjanganBpjs + tunjanganKeluarga;
  let totalgaji = totalTunjangan + gajiPokok;

  swal({
    title: "Gaji Karyawan",
    text: `Nama Pegawai : ${pegawai}
  Jabatan : ${jabatan}
  Status : ${status}
  Tunjangan Jabatan 15% : ${tunjanganJabatan}
  Tunjangan BPJS 10% : ${tunjanganBpjs}
  Tunjangan Keluarga 20% : ${tunjanganKeluarga}
  Total Gaji : ${totalgaji}`,
  });
}
