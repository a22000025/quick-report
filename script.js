function formatTanggal(){

let hari=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]
let bulan=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"]

let d = new Date()

// ambil tanggal kemarin
d.setDate(d.getDate() - 1)

let h=hari[d.getDay()]
let t=d.getDate().toString().padStart(2,'0')
let b=bulan[d.getMonth()]
let y=d.getFullYear()

return h+", "+t+" "+b+" "+y

}



function hitung(){

let tanggal=formatTanggal()

let k1s1=Number(document.getElementById("k1s1").value)||0
let k2s1=Number(document.getElementById("k2s1").value)||0
let k3s1=Number(document.getElementById("k3s1").value)||0

let k1s2=Number(document.getElementById("k1s2").value)||0
let k2s2=Number(document.getElementById("k2s2").value)||0
let k3s2=Number(document.getElementById("k3s2").value)||0


let prod1=(k1s1+k2s1+k3s1)*12
let prod2=(k1s2+k2s2+k3s2)*12


let sell1=
(Number(document.getElementById("sellc1").value)||0)*12.14+
(Number(document.getElementById("sellb1").value)||0)*8.6+
(Number(document.getElementById("sellx1").value)||0)*28.63


let sell2=
(Number(document.getElementById("sellc2").value)||0)*12.14+
(Number(document.getElementById("sellb2").value)||0)*8.6+
(Number(document.getElementById("sellx2").value)||0)*28.63


let raw1=(Number(document.getElementById("raw1").value)||0)*8.6
let raw2=(Number(document.getElementById("raw2").value)||0)*8.6


let totalProd=prod1+prod2
let totalSell=sell1+sell2
let totalRaw=raw1+raw2


let report=`
${tanggal}

Produksi
Shift 1 = ${prod1.toLocaleString(undefined,{minimumFractionDigits:2})}
Shift 2 = ${prod2.toLocaleString(undefined,{minimumFractionDigits:2})}
Total   = ${totalProd.toLocaleString(undefined,{minimumFractionDigits:2})}

Sell
Shift 1 = ${sell1.toLocaleString(undefined,{minimumFractionDigits:2})}
Shift 2 = ${sell2.toLocaleString(undefined,{minimumFractionDigits:2})}
Total   = ${totalSell.toLocaleString(undefined,{minimumFractionDigits:2})}

Raw
Shift 1 = ${raw1.toLocaleString(undefined,{minimumFractionDigits:2})}
Shift 2 = ${raw2.toLocaleString(undefined,{minimumFractionDigits:2})}
Total   = ${totalRaw.toLocaleString(undefined,{minimumFractionDigits:2})}
`

document.getElementById("hasil").innerText=report

}



function copyReport(){

let text=document.getElementById("hasil").innerText

if(!text){
alert("Report belum dibuat")
return
}

navigator.clipboard.writeText(text)

alert("Report berhasil di copy")

}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
}