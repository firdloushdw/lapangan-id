export const Footer = () => (
    <footer className="bg-[#91D36E] mt-[100px]">
        <section className="max-w-[1142px] mx-auto w-full flex py-[68px]">
            <div className="flex flex-col text-white mr-[107px]">
                <h1 className="text-3xl mb-[13px] font-bold">Lapangan.id</h1>
                <p className="w-[472px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum commodi accusamus quaerat incidunt dignissimos est obcaecati facere, hic, qui consectetur asperiores repellat tenetur repudiandae at, error tempore! Error hic pariatur eius animi. Veniam
                    cupiditate esse laboriosam tempore architecto eius magnam?
                </p>
            </div>

            <div className="text-white mr-[73px]">
                <h2 className="text-xl mb-[18px] font-bold">Partner</h2>
                <div className="flex flex-col gap-[11px] text-base">
                    <a href="">lorem</a>
                    <a href="">lorem</a>
                    <a href="">lorem</a>
                    <a href="">lorem</a>
                </div>
            </div>

            <div className="text-white mr-[54px]">
                <h2 className="text-xl mb-[18px] font-bold">Alamat</h2>
                <div className="flex flex-col gap-[11px] text-base ml-[9px]">
                    <a href="">lorem</a>
                    <a href="">lorem</a>
                    <a href="">lorem</a>
                    <a href="">lorem</a>
                </div>
            </div>

            <div className="text-white">
                <h2 className="text-xl mb-[18px] font-bold">Kontak</h2>
                <div className="flex flex-col gap-[11px] text-base ml-[9px]">
                    <div className="mr-[10px] w-[152px]">
                        <p>(+62) 813-5617-2712</p>
                        <p>(+62) 213-313-24</p>
                        <p>lapanganid@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>

        <div className="flex gap-[17px] items-center justify-center pb-[58px]">
            <a href="#">
                <img src="./public/img/facebook.svg" alt="" />
            </a>
            <a href="#">
                <img src="./public/img/instagram.svg" alt="" />
            </a>
            <a href="#">
                <img src="./public/img/youtube.svg" alt="" />
            </a>
            <a href="#">
                <img src="./public/img/mail.svg" alt="" />
            </a>
            <a href="#">
                <img src="./public/img/twitter.svg" alt="" />
            </a>
        </div>
    </footer>
)