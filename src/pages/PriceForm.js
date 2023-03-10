import React, { useState } from 'react';
import { AdvancedCard } from '../components/cards/AdvancedCard';
import { Button } from '../components/button/Button';
import { Input } from '../components/input/Input';
import { Select } from '../components/select/Select';

const GSTOptions = [
  { value: '0', option: '0%' },
  { value: '3', option: '3%' },
  { value: '5', option: '5%' },
  { value: '8', option: '8%' },
  { value: '12', option: '12%' },
  { value: '18', option: '18%' },
  { value: '28', option: '28%' },
];

function PriceForm() {
  const [mrp, setMRP] = useState('');
  const [purchasePriceNet, setPurchasePriceNet] = useState('');
  const [purchasePriceGross, setPurchasePriceGross] = useState('');
  const [salePriceNet, setSalePriceNet] = useState('');
  const [salePriceGross, setSalePriceGross] = useState('');
  return (
    <form className="m-t-20">
      <AdvancedCard
        type={'s-card'}
        footer
        footerContentRight={<Button isDisabled={true}>Save</Button>}
      >
        <h3 className="title is-4 is-bold">Price</h3>
        <div className="columns is-multiline m-b-5">
          <div className="column is-6">
            <div className="field">
              <label>GST Rate</label>
              {/* <Select options={GSTOptions} /> */}
            </div>
          </div>
          <div className="column is-6">
            <div className="field">
              <label>MRP *</label>
              <Input
                type={'number'}
                name={'mrp'}
                placeholder={'₹ 0'}
                value={mrp}
                onChange={(e) => setMRP(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="columns is-multiline m-b-5">
          <div className="column is-6">
            <div className="field">
              <label>Purchase Price (net)</label>
              <Input
                type={'number'}
                name={'purchase_net_price'}
                placeholder={'₹ 0'}
                value={purchasePriceNet}
                onChange={(e) => setPurchasePriceNet(e.target.value)}
              />
            </div>
          </div>
          <div className="column is-6">
            <div className="field">
              <label>Purchase Price (gross)</label>
              <Input
                type={'number'}
                name={'purchase_gross_price'}
                placeholder={'₹ 0'}
                value={purchasePriceGross}
                onChange={(e) => setPurchasePriceGross(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="columns is-multiline m-b-5">
          <div className="column is-6">
            <div className="field">
              <label>Sale Price (net)</label>
              <Input
                type={'number'}
                name={'sale_net_price'}
                placeholder={'₹ 0'}
                value={salePriceNet}
                onChange={(e) => setSalePriceNet(e.target.value)}
              />
            </div>
          </div>
          <div className="column is-6">
            <div className="field">
              <label>Sale Price (gross)</label>
              <Input
                type={'number'}
                name={'sale_gross-price'}
                placeholder={'₹ 0'}
                value={salePriceGross}
                onChange={(e) => setSalePriceGross(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </AdvancedCard>
    </form>
  );
}

export default PriceForm;
