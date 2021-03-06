import React, { Component } from 'react';
import ImTokenDevice from '../Devices/ImToken';
import { Button,Icon } from '@icedesign/base';
import Typo from '../../../../../common/typo';

export default class ImImToken extends Component {
  static displayName = 'ImImToken';
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bg-grey-50 zb-b-t" style={{padding:'50px 0px 50px'}}>
        <div className="fs30 color-black-3 text-center font-weight">Solution 02</div>
        <div className="fs50 color-black text-center font-weight">Web DEX</div>
        <div className="text-center pt15 pb0 d-block d-sm-none">
            <div className="row justify-content-center ml0 mr0">
              <div className="col-auto">
                <div className="cd-mac cd-pro cd-center cd-scale-40">
                  <div className="cd-top"></div>
                  <div className="cd-bottom"></div>
                  <div className="cd-camera"></div>
                  <div className="cd-notch"></div>
                  <div className="cd-screen">
                    <img src={require('../Devices/products/webdex-circulr/circulr.png')} />
                  </div>
                </div>
              </div>
              <div className="col-auto d-flex align-items-center p10" style={{textAlign:'left'}}>
                <div className="text-center">
                  <div className="fs40 color-black mt15">Circulr</div>
                  <div className="fs20 color-black-2">A Web DEX without Using PrivateKey</div>
                  <div hidden className="pt5 pb5 text-left">
                    <div className="fs14 pb5 color-grey-500">
                      ☉ Open sourced at 2018.07
                    </div>
                    <div className="fs14 pb5 color-grey-500">
                      ☉ Easy to customize UI theme
                    </div>
                    <div className="fs14 pb5 color-grey-500">
                      ☉ Trading without touching you privatekey
                    </div>
                    <div className="fs14 pb5 color-grey-500">
                      ☉ Walelts Supported: Metamask, Ledger, TREZOR, Loopr, tokenenst
                    </div>
                  </div>
                  <div className="pt10 pb10">
                    <Typo.Button href="https://circulr.loopring.io" target="_blank" shape="pill" size="" className="m5 bg-primary color-white">
                      Trade Now
                    </Typo.Button>
                    <Typo.Button href="http://loopring.org/developers.html" target="_blank" shape="pill" boder="bordered" size="" className="m5 bg-primary color-white">
                      Learn More
                    </Typo.Button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="text-center pt50 pb50 d-none d-sm-block">
          <div className="pb50"></div>
          <div className="row justify-content-center ml0 mr0">
            <div className="col-auto d-none d-sm-block">
              <div className="cd-mac cd-pro cd-center ">
                <div className="cd-top"></div>
                <div className="cd-bottom"></div>
                <div className="cd-camera"></div>
                <div className="cd-notch"></div>
                <div className="cd-screen">
                  <img src={require('../Devices/products/webdex-circulr/circulr.png')} />
                </div>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center p10" style={{textAlign:'left'}}>
              <div className="text-center">
                <img className="mb10" style={{borderRadius:'12px',width:'100px',height:'100px'}} src={require('../Devices/products/logos/loopr.png')} />
                <div className="fs40 color-black mt15">Circulr</div>
                <div className="fs20 color-black-2">A Web DEX without Using PrivateKey</div>
                <div hidden className="pt5 pb5 text-left">
                  <div className="fs14 pb5 color-grey-500">
                    ☉ Open sourced at 2018.07
                  </div>
                  <div className="fs14 pb5 color-grey-500">
                    ☉ Easy to customize UI theme
                  </div>
                  <div className="fs14 pb5 color-grey-500">
                    ☉ Trading without touching you privatekey
                  </div>
                  <div className="fs14 pb5 color-grey-500">
                    ☉ Walelts Supported: Metamask, Ledger, TREZOR, Loopr, tokenenst
                  </div>
                </div>
                <div className="pt10 pb10">
                  <Typo.Button href="https://circulr.loopring.io" target="_blank" shape="pill" size="large" className="m5 bg-primary color-white">
                    Trade Now
                  </Typo.Button>
                  <Typo.Button href="http://loopring.org/developers.html" target="_blank" shape="pill" boder="bordered" size="large" className="m5 bg-primary color-white">
                    Learn More
                  </Typo.Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const styles = {
  wrapper: {
    height: "auto",
    backgroundColor: '#333',
    overflow: 'hidden',
    padding:'80px 0px'
  },
  body: {
    textAlign: 'left',
  },
  title: {
    fontSize: 48,
    color: '#000',
    marginBottom: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: '#666',
    lineHeight: '24px',
    letterSpacing: 2,
  },
  image: {
    margin: '20px auto 0 auto',
    display: 'block',
  },
  primaryButton: {
    height: 50,
    fontSize: 16,
    padding: '0 58px',
    lineHeight: '50px',
    color: '#fff',
  },
  secondaryButton: {
    height: 50,
    fontSize: 16,
    padding: '0 58px',
    lineHeight: '50px',
    marginRight: 20,
    backgroundColor: 'transparent',
    borderColor: '#5485f7',
    color: '#5485f7',
  },
};
