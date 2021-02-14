function Donate() {
  return (
    <div className="container donate-container">
      <div className="donate-main-title">
        <h1>Kripto para ile çorba parası bırakabilirsiniz :)</h1>
        <img
          src="https://img.icons8.com/dusk/32/000000/like.png"
          alt="heart-icon"
        />
      </div>
      <p className="donate-secondary-title">
        Bağışların yarısı sokak hayvanlarına gidecektir.
      </p>
      <div className="donate-accounts">
        <p>
          <img
            src="https://img.icons8.com/office/24/000000/bitcoin.png"
            alt="bitcoin-icon"
          />
          <span>
            <span>BTC:</span> 1E9FJNHU7mtQAmWRfMohQT3geU8h87GbAf
          </span>
        </p>
        <p>
          <img
            src="https://img.icons8.com/fluent/24/000000/ethereum.png"
            alt="ethereum-icon"
          />
          <span>
            <span>ETH:</span> 0xb1bb2f6b1a105d6f69c4da401195e1fed8435f4d
          </span>
        </p>
        <p>
          <img
            src="https://img.icons8.com/windows/32/000000/litecoin.png"
            alt="litecoin-icon"
          />
          <span>
            <span>LTC:</span> LaLBtLUWC8U5W5QWcrEK2HjRXiyG2NvqZE
          </span>
        </p>
      </div>
      <div className="site-info">
        <h2 className="site-info-title">Site Hakkında</h2>
        <p className="site-info-content">
          Herkese merhaba TürkTorrentOyun(TTO) gelişim sürecindedir. Lütfen ona
          iyi davranın :)
        </p>
        <p className="site-info-content">
          Torrentler reklamsızdır. Deneme amaçlı sunulmuştur, oyunun aslını
          almanız tavsiye edilir.
        </p>
      </div>
    </div>
  );
}

export default Donate;
