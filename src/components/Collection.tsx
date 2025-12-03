import { useState } from 'react';

export default function Collection() {
  const [activeCollection, setActiveCollection] = useState(0);

  const collections = [
    {
      name: 'Banarasi Silk',
      description: 'Luxurious silk sarees with intricate zari work and gold embellishments',
      items: [
        {
          id: 1,
          image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXFhoWGBUYFxcVGBcaFxcXFxgYGBcYHSggGBolHRcYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mHyYtLS0tLS0tLS0tLS0tLS0tLS8tLS0tLS0tLTUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EADwQAAIBAgQDBgUDAwQCAQUAAAECEQADBBIhMQVBUQYiYXGBkRMyobHBQtHwI1LxFGJy4QdTkhYkM3OC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QALREAAgICAgEDAwQBBQEAAAAAAAECEQMhEjFBIjJRBGFxE4HB8LFCUpGhsiP/2gAMAwEAAhEDEQA/APN/jDX+dahm3oFTBohG0vwsHp+a0L+s/wA2pVdakK6g2HMZduX70uakzGhE1wDJpjDLnJkwADJ35Ex/NqY4PhHzC4cOL1qNi4Tf9Qk97y2rfE8ZbAyogtyc0AazEa6kERpoTvUpZN0h1HywuJ4WsgI5mcsNAk+m0+PUVS4vHAGAJMe0CTS97iTDYnTbWY3iJ6UHhNsvcy82Vhv1U/mKMbrYr29GhiWJ+YjyooDgSGJ89aUvWWRirCGG4p740JIFOKZbxgOjCD56GmC8+VUrGrLCMzJMEwYJgwOknlNcGwrCog1jTUBXBJMagTUorCsVxxFTUC9bLUMmiAkhqZapI3dNBFA4lNZWhWVwS9b/AE397e1ajD/+xvaqQR0qenhScH8jcvsXI+B/e30oiJhudx/YfvVIkdB7UULHIewruD+TuX2LfLhv/Y/sP3qFzCJdGWwXL6EkjuqOeahJwu6VQqgJeIGXkwlSdOY1q8u8POHtBcoVm1cnusfAt08BUZyrp7HSvwUuO4i1tcgbw7vdH2/NUV26W1I186c4rdBchdhz6nmT50gG86eK0IwF9qsOztpjdlRJCkxBM6gQADvJFV9/wqz4FcKuCNx5/gg9Njyp5e0EV6jocHwy3feXEsRmLc5kKB0/xVvieyFgoIBnrP7VvhmJDM2ZhKgHXcyRtoAd5nfSh8Y7SXU/p20yjbPGZ2//AFr+TWZSk3Rr4xUbaOU4z2ZuWpKAuvhuPSj9g2DXb2HdsqX7LKdP1rDJvtrPvVzwK7cusCymGQuGNwsSMxXvLOkkH2ra4L4GIuXQAVa0xZCYDREx49B1qvNrTJfoqSUo9FHcSwCQS4IJBGmkaGhf0OrfSme0nCzZuKYAW4M66ydO609DmBPrVRFUUbXZJunQ2TZ5Zqifh+NLBakQKPH7gsNmtdDWWhbYwAZ+gHU0tlqWD3Y0GqOsxl09ajbWi2zoP51qB50wAa1laisrjiCKzGFBJ6DU04eG4gCTZux1yN+BXdYHh9pb1wm2Ef4rWpnS2VkKxUjvKxGp5ZgY3iwGKdWKm2pMAFZ+FB1kjvGR6cqzvO/CKLGjzXBYW5cbLbtszDUgbjzrouDdmyWDX/lGvwgczP4NE5V68/CuqGGli65bbxBF0sFdTuCwWDrrM/et8MwTtPdMgsCqlXUAEwVZoEHQiNRp5Uss0mvg5RSB4hLlkpflWIfNctqVLKCAFOUdAAMo2AHjVVxTGm4rQxYEklSSYn/a3ynyq0wX9fKyC3bBXOC8OxklZZm2PkDHSle0PDFyZzibDHxJJPLulUnl9KnFbGbPOMYpVjNLltNKf4opJmPPcz4gneq2ti6IsxtqLYc6QSOWhj60E7USwRsaJyLxrnwkS4jNmJ76Fi0R10A19ftXYXMMmKFtycrRoVYqdtgRXDYi2SqhRoOldX2ZxxNpbeiFGAzETmEEwNdDpz8az5PlGvF/tZ03C+HKggCBzPM+ZpHiNofEVomG2212H119KsreNtgEBwWicoOY+w1pLGaiNyTA86i27NKS4uij7dWM7Yf4dp8wtlWYahsrQsCdIObpM865C7ZK/MCD416RhL+Yt/TVwI0e5kyiTsTv7UrxThqXAcynKqScuWWbWAvLkdfLTWrxzU6MDxnnhrIrsrvZ5Llu2FUoSCLdwwFuBWgDX9e+msgTNUn/ANOX5cZdVjQaliTACjmTVVliybgyoWpYP9XrRcRg7luc6MsGDI59JoeAtMQQASegBNNJ6Alsy3tUXqVtDmCR3iYg6a+tGuYRwYKnadp9iK60dQnFZVvheDsVzPKry7pJPpWUryRQ3FncY278JSbmhfR2EuVByh8zN0kCTprptWWbmHKF71u3iHi2gbXvPBUgMPAKxA2LGrXh+IQMLhOrWwMsM25LsIG+pANQx1rPjcMwUi2AYBXIAw2geIJ9qxJoqxDDcMYXGt2FOYfOouMtm3OoUliSx8ADR8Xw29b77jCDb9V0H0jf2pu9jxZZklfiFixgl3YsS2iICzb+HpQ8bg7xtteuZbb7W84BukmcqrbXS2JnUy3lXWcBwGHJSTatoQQMozag666iOsGmcddw+HAzIodhppBjmzQJC+G5+zmFw+VFs7Oy958wYWzoJJ5nUnxI9aT49g0F20DcDP8ADuEsQBmP9MAZfQadBSJpvYWcDxx2vOxDBv7RIVQvLQTqf4a5G/bKkg12HFeJW0ZA4BO5VDJ2A3gAAmTXMv327iknUxudyeW+n2rdj6IyQjyrLZ1FY1R2qohY4bEkaTVhw8MXIkx4GKpWEkRzH5Iqw4cHBkbjcUkkWhPZ6RwTDolomAJ3/wA86S4grMM6sVyHMPGAZBA1g0nwq+1z5j6cquL7ADxjaskn6jaqcQ2D+CQcyWr0wDnAdkd0BTvGZBka6aiDVTgeKDDqp/WuZb1mDKANLEiNAABr0AqWHxYTOqoDIEsPmJlSOeqgr0n611GJ4xh71l1BBJWCCpDHTYyKL0ZXdlA1+7dPwFEo51QOEAI1GUsIEjUVY4nElWdbnw0y95lUteyzsbjDKAd9JO5qiwb/AAzZDtlOVELaCGgKPUGD6VZ4PhLPduyXDxIIaO8VgMRMt3xInTvUJJeRdiXG8EmIAGYFRDBkBCnXaDMiBE9W8KaXhVu2MvJFgAQSqzM5YJMkk6jaPGZYK/8AEkFSu5ZdQUbTOpECJBJ6aeM0ze4aTcKhjM7sRl7u7NJkny8KRtr02Mvk5niXCEdc4dXIUkKAxuAgE5T1E7MY0ouHCubYKFjIJ0IkA94QY1j610F51t5zbdbhMKXgi2kTEak3H7xAA30rdvhTFVIiygUhWumHbMSzMVGiliSdT0GkTReTQOIjjMWqkEKIE5UUAhdgTpueU+MVlF4jw61AAc3ROpXM0eY1zDyOk1lKlFrYd+C0wCrdZl/qWltsFZFOW4QygoWb5oPgR0q04z2PGQPhWK37ZDLnZmD8ijFid+tc9g3vXLndyvdVSsz3L9o65CeTDdW684Ojb8ddZAa+lwjKtt1b5tRDMe6eUEE0tNPQ3aB4PGuL7n4TW7oAZ1zD4anXOWYEgg8p2pHjPaC0GK3IuncgDLbGhj/c/mTVN2k4v8LNhrbT/wC1xMtcmTmPONveuOv4ytWPDfqZGU60jpMT2vZfkt2l8MgIjzJmq3EdosRe1VCI5qCV9mkVUJgrj6gek1DFYi7HwnkBf0wFj23FW4R8IFy8kcXiGcwRHh/mm8DxA2QyMknodIJ6j2NJYVQ1xQx0LAEmeZpvj7r8SF2VQs6cp006CBRddHJ1sr7jSSTuST71BqlNRpxGdFwXC/EQA6EKTbgDvNm1VusgaHf7U2LI6EEHyOk1rs+A1pGUkPbY6gkEGSVOngatmUMFV1JbIB8RfmLAyzuCdRGnmwHSs7lTo0KHpTJYC2d51ifQTProftT9wSeYk9ZmAdoPh/NaUsWyGIExAIJHUydoAjn/AMaaxFxba5rhnULkAKluY7xJ1BnyqbeyiujBYMGCFUfO5MKo6sfp7VT8T4srnLZWT/7Dp/8AEczQeJ492YK4CKpMINRvqZ/Xr7R4UjftganSdjyOk6EacxTKPlgb8IHisGzd5lJMCTufDMeU1BMfest3brgjWMxIHgROg+tau47IpA+b9Mfp3mffbak2JgA6sx1J133mqpN9iNI9D7PcWW+LhyXDfZBmUHNOU5VObp15776VYYm0VUvdu2Qm+Ys9wk8xkAXUeM157w3iZwt8susoybkDvRB08q3jsdcvNmc9fqZNS/Qt34FnLi6L/E9o0Qg2pJGguNEj/ggAW2PLXxqqxHHnYmCfM7++/wBaDhOFs+w0pu9w+1b+dpPhV1iivBJzYhd4reYAF208T+9ZRTfsf2mt0/FC2d3wrioT4hKqt1GYPqSdGIJXqpMaj/bptVCe1TNca5c+UBiomcoCnKPMnU9dOgqs7UX1S8xtsSrNqOY9f1A7g/YiuWu4gmfb71ljiT2Vc2jd/EMzE7liSfEnUmrDhnDJ7zUrgMLPePOukwyiABVZypUg4oW7YfC4YCh9ouGB7JaO8gLA+A1YeUSfP1ogZl13FB4zxYfDNtAWdwQABrrpUYp8k0aJOPFpnE1o1LEWypyneh1rMLZKa0taNbWuOGMJintnMjEH6HwI5irvDdpTmRntgsswRMd4RqszoYO+6jSqjB4F7rZbaliNSeQHU12/Z3ssqk5gGaCJYGBoJjow16axOmlRyyhFXIvjjN9dAsVxInW0rZSDDMIgjSQJMnnBqsxV285l5JjQmBAmYHIDXbx1Otd3e4TZVVfulT3S/ViwAGUL8sk+XPqvP8exViwHlRmMBbek6IoQuNIWAII1gxWaGTk6ijQ4Utsq1x+mXEAOnyhsoDDnod5gEa/iqHGYoZmW0W+HJy5ozEcs0aT5UHE3y5k+3ICSYHgJreHtA6VrjBR2QcuWkE4cgzBnXMoI02n1opXM7MBoDpO4BOnnTNlAdyFAUkE7aDQetVr3Ig9dfpR7ZRxUY0QxDSSfH7V0/AsD8RVc7ET+9c4bQAnN5dTXVdm8cq4YDoWB9Tm/NPEzZE+2Wl9giwtclxF2ZqvLuLDGoNw4XNqZkznMTYAAgkmNfr7f91qrjEcHYVlCjrOaN5n0JmiW8KSTyoVlY1pm1ieUa0j+xbHGL9wZrZQSpkdDTNjiSrqTHvSV4nLmb0H83pdrEx48vClq+ys9P0o7TCYgMNwR1o5szqN/5pXIcIxptsQdVOvlXW4PEqwBBqMk4PRSLU1TOM4/h2W6ZEA7HlVZXpmO4el5CrCfxXBcW4Y9hobbk3X/ALq2PJy/Jmy4nHa6EKJZGoodEt1Rkkdl2f4qLQCKAFJgsAJIbQgn3jadiYrqrfGLQuAIQAckd4sZUif+LESc0wSDI2J8rS6RTNu83L3rLPApOzZDN4o7LjfajKctoA3IEXI0WCQwyMNTtr9ztxl1GZ9WzMdyTOw6msvYwmBMkaDwqKHJqfmPKq48agtCzlyZtMP10p4YdVtqwdTmJEfqEREjxpG5dIAHM0PEPsvQa+dPTZycYdFhfHcJ5bTyqr+IXKL0GUeUk/mjs7C2QT3elQ4OQLgYqGC65TsfA13SBN85JDQspPekaHx1jTTxrWEvwGA2mfx+KFibwLR4yf2H2qKwApnUkgjp4zRQuSnpDaYrWrbA8QI51VX8OpIyAjQT4mNfrT2GwhinRnH72PJ51lLCxWUQHO2RmO388aasWQDpqTzrYAAgCpOco2OZthzg8/LxqDZ6MIKO2RuuJmJC6AdT1qK6Asdz/NKklrmdT9B5UXEHujxrg09sSw0ywHSiWMQ1vUTpuPzRcOBqR1+1Dxj7ASW8NdOc0e3RNwqF2dFwzjYMTVvftW7ywQCDXm7MVMrp4dKuOC8UOdVZ8izLtIkKNTlkxmI0HiRUp4q2gQzLqRvGdmHDN8NlyiTLsEiOQJ0Y/tVPdwzoe8I6HcHyYaH0r17hqpiMl57aQQRhbGoVLamPjXP7mJ1nyA1NL8Ywtq6t2y2aVQZWKmbhJBlBpCCNG722+ppF9Q06kI8Se0eUQaNaWSAWyrME6mB1IFWHaLBWrJQWGdlKwxdCh+IILgAjYZh4/SaooRqxPl/Nq0p2rJ1ToZIRJKnNBgGIn05UPNAzNudqgg5kQvIdaxULmeX2ojX8DXC7gVjdZVcAEZW21FDwc5s0A+e1GxdrKETTUZtOQ8ahbfSAJ5CgNW6ZDiL6AdT9q1w0QCaBjnlvKmJKWhyLDT1PKj4Apetv4BAT4Tz+/wBftREQFCcwnNly84iZ8taDcEfYUbCJ3M0jVojntvFcxY90dH2dKXEIPzJ9VOx9DI9utOXVg+Vc1g7htsXVgCn6TuytuB9/arwXswzDUEb00WTnGmEW4AaylLhIO1ZREKhTJowbmfIeA5ClrjxsPmMx0HSmZ0NRPSi7Zpday8dR4fjehWniT4wPOpMNSOix6n/NcNdoDwy7LhWYKCdWImKcu4cSSGI8RzA205VX4O1/U8AaYxpiY/VpFF9koN8PUK3kBE9Zj3pa1oY2nSn2sdwHmN/WkrlMtoz5ItOz0W3d+MGtWriq1plebjwvw7IzBRzBLkDSNhvFL8C4u+IvNdYn5gonU5eQJ51xXDsWUY96BB5TPON+cV1XYFQZ8DWZ4lFMrCfJoe7bYHu5hMBgxHuJ9J+9cQ1jpXqHFyjhkkEkEEb7iuJXs5eIJGUZQSVJOoAkwAJPTpqKOOdLZXJFPwUeXMe9OniPpNMqugy7e1T596FIOsjaD/PegXL41gb+nrVyWomXrwBJ5kQPz/PCtYP5Y6yfPlFbs2s57xO3L7U+b+ZoaJAyjYaDyFBsMI27ZU3sKxlhr9D7VvFYl2RFaYtgqoIiAST95p8CHOukE9alxIIwJVSogQpOYg7bx1+9dewPFptFdi2MgcgJ96LhNApIBGYiD5UtcMufOKMogKSNJ196Ymu2wrDve/01p3hV/KTbPmv5H596UxRBkgQJkDf61qCYy/MDIoJlMkLtF3du1qlFu5lzehHQ8xW6oZKEbqEsI6Vp98oMn7VO7cih2hG+7fQVI3tKw1l1W4gZA4AJKkkCSCAZHTehtcgM3U6fj7VBDq7en4o625C+Bn2H/dAKt9f3wRQBF13O/iTSmIB3O5+lMls1zwX71HHrtRQs1cdeBnBvIHlBpDFWgCYOlHwB1rMeus8jXLTBk9WNMrXSK63sGpOfkOsga+tc1cUHarvsrhwQScurgd5cwjmNNRXT9pDEqmdm18uQBeCQAD8h1E6iFGlCufE1yXxcMafLp4HKNQaPieHtChLOGLgDRTrlg6zrOwEAeeopC5icVzwqADfK4B8oIFZqtGuzk+0+EYX85EC4M0bgNpnjwkz/AP1GsTVeLEfua7XtJaV7EQcwhwT/AHLmkeRUnprl6SeXw+oymNBz/earCdxIShUiGFTXcbfmlMSpBMkQddNauL9srllY7ogiIbU6/wCao8S8k+dPF3sbIqgkWGDu599WGkneKnjMI9tyjKRIBg+49DSfDx3tNop92LESSTI3M+Q1rnplYeqGymYQdDJPP70Z9l6VLG4RkuurAqRrB5TUH+VR4U62Zaq0N3Qs92YjnvQsPyA3mI5+FGKgBSDOmukR4UJGKvIJBmQRyO4ikND7TJBjbcgggHcdCK1UrpzyWJJJmTqSedap1LRKeG3aB2xmMnasDA535DRZ9h+9avtlGUeXr/1+a3etwir6n8Uo38f5IqYSOpj80e5eyx1ifrQXHy+Jn8UPGibgUdAPz+a6jnJxWvshnhqaSeetRxp2p1EyqBS123JEMCW1gfp86F7KSjUFELwa/kJORWlSO8JAnSfOiG2CMp/njWW0CiBS2PxOUQPmP0FDt6H1CHqELzxI511NrCZFtKWhVAumDux+Xbpv7VyLJImr/FcWtd0WszZQPmnU/wB2vTQRTTTfRjxyW7Le82dYfNn3Bkyi84M6EwPpXPY3ibrcK2bj5AdJYtO28moNxC46kTE7kbx0pPLAoRjXYZyvotsdx1roS36sRInSIPUUG1iCsEQY6gEexqusJ3gaeYc/qK5xS0BSb2yeLxJcMeelV11gToP805iBCtBnbXXw60ioII60Y9DTvRacPtwNRTeMKFybalVj5Sc0GNdfOh212A1P3qUZW7w2Oq7eh5ikfZsiqikKYzWSSSYGu+x60rdPdUeE+9WmLtBhcdIRFAhWaW1nQdYiqu7svkKeDM2ZDCL3AZB/HnUboETrmBEbR6zUrFshJI0Ox6xvRrVtCj5mIaO6AJzHxPKg3THS5QB3r2dixABJkhRA16DlWUKRpE7CZ6xr6TWVwU7Bope5qZ1JJ6knU+pmj3mkn2HppQsI+VWPP+AfWi210HuaLFxrRpU7w6AR/PeswVgu73ACQp3iQOQnpUrl85dToJjzNM8LvuloqrFVde8B+rnQd0MopyS/cHiG7tJ4Mw1MYlSRpQLVuTHLnRXR075oZfEAAt6DxNVgVmlt9alfvZjp8o0H707gAq6milRKT/UlXgUXDseRqQwLbxT/AMUHQH0prF4V7WXNHeUMIM6HaaDn4GWGLKvAqZIOmkHwqw/0KxGsftWKATqB51j4kL3ToOvWg2ysIRivUVtxCjdaZtMp30reL70rGoEj80O3aLRArn0Z5R4ypdBMbayowII28OlV+FgOubadafu23TKHUw0EZuYOxHhVbe0Y0Y9HTfTLxozd06cjt5UCy5a5BMsTzPP1o+BylkDsVUgS0Zo03gb0hxEBbhymROh2nXeKVd0aMkqSkM38K+Z1ymVQkjoBM0hf3HkPtRsVcPxIB3Qg/U0K78xp4kcru6DYSY206+NHwyAkgsEhSQWmDH6RHM0nhyRHSfSm3tkkKoJJ2ApZD4n6QCjvH396ystHUeo9RWVzGhtA1Xbyn9qZ2Weug/NBtjc9aLcGsdB9TXMEFSFcc2gHU0/aEKPKq3FmXA6U9duaQKL6BCXqkyN1p0oWMuZRlG7b+VSs6nwFK4x5ueWlckLkn6b+SKLFM20UqSTBHKN/WaWFym7N0xA1pmSikSs3FG29N58w0PpzpJ7ZOtCfTY0KKLI4fguLOEuOHZVkW1zOdNBrr9DS1+1mXy/hoWFxkd1iYOmhj3601ZXWBrO3jSbTLJqaE7jkAv8A7cvrMV6D2L7OI6Jdca7gSpDAEjQczqN9PESDXn3GcMyiNRlPeH2Pt969p4K63cHbKgqQqhQWYCSABH90GYGxBbTWsn1s3GCrydjXrafg43t1jwU+GUQTczZlA+VRABnvDvEEeRGtefY0Q/1q97X4z4uKcAgqGyAgFZCmNQee9UeN3GnX7mtH08OMEieeXK/sP4YdweX5pXEr3+8YAGkfSrTg11VUF0FxcpGWSu+xBHMVX8SXY+lUXdDZF/8ANP8AAWzcyuHgGUK68s4ifPU0G3anMY31B96n/Z5T7BqngToR5fWiKlykl/ehawTETpMxTdu8VMqSGGxGhGn7UG0CCV5T0opbK6tAMHYiQfMVzDj1ESsnuk9GP1FZUkMox2l5+9bpiDbXQeyvPkNa1ZE69da3d0UDr9qxjAJ8KQ1Nlaxlz50QtyoWH3miI0EseX35U5jixqQB/wAe8fPkKQunvTTjYsjDfDyr37mctHe0ERPTb2pO7QQckrpG7azVpgMKpRiWIbSPHw8KrrQ2HU1cWV5UJFcMEzVmwBUr1oEaiiVrEAZBBEnl0pbNPFJUVn+nMx7eNFw9xliQY3DdKPdcBDB1iluH3jOXcfamIcVCS2P4p8xJYzmXUnnXpHDS2FwpusxcqoJgrIygKVkaAwogmvLcVfDIwG4Ej816N2u7nDrQiJ+GsENJ7oOvIEZDrsQNOVYvqo24R+WaYyTujzHFXCbpZjqTmJPMnUmtcQPeEdPuaNxSxIDDkNfKlsDqwzagbVtRjlak4/Ja2khBQ8XlKkQS3Lw86sMJjWS26LGVwA0iToZEHlSSrBJ60qs1SjqiGTLlPRT9poxuSFGndG8bk9aFdEmP9pprFqkjISe6JnTXnXMCW9EbAUBiVBJ59KG0ASw03plcODZNzOAQwX4fNgeY8v541vEbvc89K5bYZNRiQ4fPw5A3PP1rK6jspwW2+EFy5Ms5CnNGix+SaypSzwTaaEjiuK/BzDGW8BpQ8aYQ1K0pG+8+dA4i2gHU1ddk5y9DYrb0Wsu8l9T5mpWR7KJrWFPeLHkCfX/NMZUukSxnIdNPYf8AdQO3pWrhlQepJqVsSK4LdyC4T5gTV3hrCnOS4XKsif1f7R41S2RT1sEgj1FLJWacOkFuP51LKNqFh29xT9zBlLSXiVIcsAAdRkMGRStpF4qytxI0J8YjyquS4VbSnWlmjxikWXvEelMjLm7TGLa57iouudlUD/kQI+telf8AlK4weyoJCEE5ZESuUAwOcN5bxXF9iuGNcx2HAEgOLhjkEIM+8V03/knEh8UoEHLbAJiGBLMcrdYEEf8AKsuR3ngvhNlsKdNs4riFzQiek9TNL8NXvehoWJeWJ8ac4YnzegrX0iKfPIOgHof3ouIxYFrJlWQ05+e3y+VRxGMZgizougGmgHlVY1zO4A2n/NIlfZonOlSH8KZYmNYAj6/mp4hCGIIiK1gjuepJHvW8S5LHUn613kZe0i0gAwQDMGNDG8HnVZxFpIWre/jXZEtsxKWwQo6TqapLj94mjGyGZ6o7TsvxkJYFq4YVZiBOYHUqY1Gven0rKc7EcFt3LJusA76hUJAQCVktOzamNayvOyzxqb7/AOka8ftRwOVk1Go5ioY25OXymnblh7ZysOQjmNRNV2JgtA2GlemnezzpqommeFjrqfXapARa/wCR+goDan6Uzj9CF5AUwiem/wBgd0dxfWi4UaGoYgdxPWnuD4NrqvljuDMZMaeHWlk6VjwVzr7fwA/0p3Bqz4TgmYkSMwBbpoOVK4Z9xyo+opW20aIRinaIRD1q8084A5fmjEd6fCg4zAurkEQw3B0PXWhZRp1olewTK5U6EaHwqvxFggn39KuLWZ2Agsx6akn80pjBnZbaiWOvkK6MvkXNCPGzo/8Axd3L4cvlzabTKqQxHUTvpW+39z/72/qTkOUTG2UGNNxJ3prsriIu2kAAIaBG5Egajksnfr5aUnbfFq+KxDJGUuFGX5e4iqY8JU1lx3L6hy+38h9mM5lt6sBbIQKNz/DS/D8MWJaNF1NOK/8AU02UfU1sbM+OOr+SRcWxsNufMkUlgt2boDWY+5LR0prBKotHNOZiMvTfWa7pDN8p68Fjwh1turPbFxVGqExOmn1pcySYGp2HntVlwThb4gvkZVygE5iQDJgDQHoaJi+D3cMUusEdVdT3WkSDMNppOUipOcVKr2aa1ouuJ9lsNbUtnuAgEaskEga7rXmyDv8AhPP816J2o4wpwxuDL/UYqokFiCAWzD9JDFl8R5g150g60n03Pi3Iz/UNWkj0fsPhrgzo85ACCq5M2hXvAsDIJEHXl41lC7Ccbi21k/8A5VEoQIZ1kBlkqwJEKYjYcspnKwZ1Pm+jXikuKoW7SW/9PgFttqWYFSzAtmWVZlUTAGaN+defM5JmrjtNxVr7gs2bKCBplAmNAJMbdapa9T6eDjD1dvZ5uefKWugmFHeFSxBlq1hj3q3eGtWfZP8A0/uSv/KvrROH3spjrWiJTyoWQggih4H2pWWNsQTTlrDswLASFiT0nalMLrW7mIdQVUmDv40n4NSkkrY2NNKJeulyWcyx1JO9VaYo8zTynMtBxKY8il0F/wBS1hs6yjoQQdiDy3pJsI6jPKtnXMYJkD+0ggajwnYmmcffe/czPqYA23IAUecAfep2eHOYyrJjNz2EmQdpHhSXXYmS5OvgVwnEGWGUwymVPjy+v4pHFuSd5MyT1J1NO8TvAkvAB0AiBp6bnxpPDWdiSB0n71SKS2Rkn7Q1tiieLUTKbad7QnXXx2qZtrIliTyH/VA4xjmuvLGSABsBt4Cj2xpelf4FE1IHjVky6ooE6/ak+GKDcXMSFnUgSY5wK6/s/h7ZxjNaztaQd1m0bUamBGon+b0uSfFWDFG1+4/2JxKLmSYd2UDSde8FnTaTrTnaPG2gvwype5BCrmMrMhg4XQgESJnnGmtVfEkcYtVwrK19hJ+HAXNBLZS5jVdd96q8S5sXAwuZrm7Md1YjvCQTm86x8FKfP53X98Gxy4oq+MWDbOVomAdDO/5qrQ0zjb2ckzM8zufOlAa2xutnn5JXKzu+wHCkuZrl1iqLoHDMpBMaZhEGD12O1ZWv/Hd9gt8SMgCMcwlQZy6TpJkbx8tZXl/UKX6j2/2N2GuCOBxG586HWVleyeU+yVvcUa/WVlBjx9rDWfl9Kja2NbrKBX4CWOfkTTeHclRWVlKyuMHdQBhAii4X9RrKyuDH3l92TUHISBMtrHQp+5966Ti+FRcNjSqgQlkiNAJu2wYGwmtVleXkb/WX5X/pF4ew82xyjKp86HaMuAdgKysr1fBkl7/+A+G1zE7zE0l+o+ZrKyu+QT9qDYDc+VdTwu81vC3biHK4uaNzHdI0nbSt1lSzdfuiuHo6jheHW1gc6CGuWw7tJJLFdTJ23O1cBxcbeIzepkE/QVlZWT6d3OX5K5vaVDmhNvWVlb0YGdf2culMHiiuhz2hsD16+ZrVZWVkpcpfn+Eboe1H/9k=',
          name: 'Royal Maroon',
        },
        {
          id: 2,
          image: 'data:image/jpeg;base64,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',
          name: 'Golden Elegance',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Deep Crimson',
        },
      ],
    },
    {
      name: 'Kanjivaram Heritage',
      description: 'Traditional South Indian temple border designs with richest colors',
      items: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Temple Gold',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Sacred Red',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1288255/pexels-photo-1288255.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Peacock Blue',
        },
      ],
    },
    {
      name: 'Chanderi Elegance',
      description: 'Lightweight sarees with subtle shimmer perfect for summer',
      items: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Pastel Dream',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Subtle Shimmer',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1288255/pexels-photo-1288255.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Ivory Lace',
        },
      ],
    },
    {
      name: 'Sambalpuri Traditional',
      description: 'Handwoven Odisha sarees with distinctive tie-and-dye patterns',
      items: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Tie Dye Indigo',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Natural Weave',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Geometric Pattern',
        },
      ],
    },
    {
      name: 'Tussar Silk',
      description: 'Natural tussar silk with earthy tones and rich texture',
      items: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1288255/pexels-photo-1288255.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Honey Gold',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Earthy Brown',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Wine Tussar',
        },
      ],
    },
    {
      name: 'Printed Modern',
      description: 'Contemporary printed designs with bold colors and artistic motifs',
      items: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Botanical Print',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1288255/pexels-photo-1288255.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Floral Burst',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Abstract Art',
        },
      ],
    },
    {
      name: 'Dhakai Cotton',
      description: 'Pure cotton sarees known for their breathability and comfort',
      items: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Cotton Comfort',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Pure White',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1288255/pexels-photo-1288255.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Pastel Cotton',
        },
      ],
    },
    {
      name: 'Mysore Silk',
      description: 'Premium Mysore silk with lustrous finish and traditional appeal',
      items: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1288255/pexels-photo-1288255.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Lustre Gold',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Silk Maroon',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Shaded Silk',
        },
      ],
    },
  ];

  return (
    <section id="collection" className="py-24 px-6 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Collections</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our extensive range of handcrafted sarees, each collection
            celebrating unique regional traditions and contemporary artistry.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {collections.map((collection, index) => (
            <button
              key={index}
              onClick={() => setActiveCollection(index)}
              className={`px-5 py-2 rounded-full font-semibold transition-all transform hover:scale-105 text-sm md:text-base ${
                activeCollection === index
                  ? 'bg-rose-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {collection.name}
            </button>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            {collections[activeCollection].name}
          </h3>
          <p className="text-lg text-gray-600">
            {collections[activeCollection].description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {collections[activeCollection].items.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-96 overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-2xl font-bold text-white">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl hover:bg-white transition-colors cursor-pointer"
              onClick={() => setActiveCollection(index)}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 rounded-full overflow-hidden shadow-lg">
                <img
                  src={collection.items[0].image}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">{collection.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
