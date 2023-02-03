import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isimler: [ 'Bahadir', 'Ahmet', 'Eymen'],//burada isimler ismini kendimiz veriyoruz, burada istedigimiz seyi kullanabiliriz. burasi normalde bos biakilir ve sonradan kullanicinin girdigi veriler buraya gelir ama simdi bir sonuc görmek icin bir iki isim yazdik.
    sayilar: [ 1, 2, 3]
}

export const isimlerSlice = createSlice({
    name: 'isimler' , //buradaki name ismi ise zorunlu olarak kullanmamiz gerekenlerden, dogrudan createSlice fonkiyonu icinden geliyor.
    initialState,//bu isim yukarida böyle verildigi icin böyle geliyor, yukarida hangi ismi verirsek burada öyle kullancagiz
    reducers: //buradaki reducers ismi ise zorunlu olarak kullanmamiz gerekenlerden, dogrudan createSlice fonkiyonu icinden geliyor.
{
    isimEkle:(state, {payload}) => { //bu fonksiyonu biz olusturuyoruz. state eger halihazirda bir veri girmissek onu temsil ediyor, yani Bahadir, Ahmet ve Eymen'i temsil ediyor, eger girmezsek bos gelir. payload ise daha sonra girecegimiz verileri temsil edcek yani baslangicta bos geliyor.
        state.isimler = [...state.isimler, payload] // burada state.isimler'e state.isimlerdeki isimleri aynen al ayrica payloada gelenleri de ekle diyoruz.
    }
}
    
})
export const sayilarSlice = createSlice({
    name: 'sayilar' , //buradaki name ismi ise zorunlu olarak kullanmamiz gerekenlerden, dogrudan createSlice fonkiyonu icinden geliyor.
    initialState,//bu isim yukarida böyle verildigi icin böyle geliyor, yukarida hangi ismi verirsek burada öyle kullancagiz
    reducers: //buradaki reducers ismi ise zorunlu olarak kullanmamiz gerekenlerden, dogrudan createSlice fonkiyonu icinden geliyor.
{
    sayiEkle:(state, {payload}) => { //bu fonksiyonu biz olusturuyoruz. state eger halihazirda bir veri girmissek onu temsil ediyor, yani Bahadir, Ahmet ve Eymen'i temsil ediyor, eger girmezsek bos gelir. payload ise daha sonra girecegimiz verileri temsil edcek yani baslangicta bos geliyor.
        state.sayilar = [...state.sayilar, payload] // burada state.isimler'e state.isimlerdeki isimleri aynen al ayrica payloada gelenleri de ekle diyoruz.
    }
}
    
})
export const { isimEkle } = isimlerSlice.actions;
export const { sayiEkle } = sayilarSlice.actions;
export default isimlerSlice.reducer;
export default sayilarSlice.reducer;
