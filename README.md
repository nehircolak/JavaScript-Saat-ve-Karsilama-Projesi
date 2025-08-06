# JavaScript Saat ve Karşılama Projesi 

Kullanıcıdan isim alır ve ekranın ortasında ona hoş geldin der. Ayrıca anlık saat ve gün bilgisi her saniye güncellenir.

Bu proje Patika.dev JavaScript dersi kapsamında hazırlanmıştır.

## Kullandığım bazı kalıpları açıkladım

showTime başlığını ben belirledim ama 
Date JavaScript’te yerleşik bir sınıftır (class)
new Date() Şu anki tarihi/saat bilgisiyle bir Date nesnesi oluşturur
Date.now() Bilgisayarın şu anki zamanı milisaniye cinsinden verir 

getHours getMinutes getSeconds Date nesnesinin bir hazır fonksiyonudur



JavaScript’in hazır sunduğu yerleşik (built-in) metodları
toString() sayıları veya başka veri tiplerini string (metin) haline çevirir 
padStart() sadece string'lerde kullanılabilen bir metoddur 
string.padStart(toplamUzunluk, "neyleDoldurulsun")



Köşeli parantez ([]) JavaScript'te diziden (array'den) eleman çekmek için kullanılır.
days[3] // "Çarşamba"



now.getDay() bize bugünün hafta içindeki sırasını verir 0–6 arasında bir sayı döndürür 


setInterval(showTime, 1000) 
JavaScript’teki zamanlayıcı fonksiyonlardan biridir 

Her 1000 milisaniyede (1 saniyede) bir showTime() fonksiyonunu çalıştır.


