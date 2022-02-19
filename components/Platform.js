import Image from "next/image";

const Platform = () => {
  return (
    <div className="body">
      <div className="body-wrap">
        <div className="edv">
          <div className="edv-wrap">
            <div className="left">
              <h1>Edvora</h1>
            </div>
            <div className="right">
              <Image src="/avi.png" alt="avatar" width={44} height={44} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
