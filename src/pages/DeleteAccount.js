import React, { useState } from 'react';
import { Input } from '../components/input/Input';
import { Button } from '../components/button/Button';
import { TextArea } from '../components/textarea/TextArea';
import { AdvancedCard } from '../components/cards/AdvancedCard';
import { Switch } from '../components/switch/Switch';
import ChangePassword from './ChangePassword';

function DeleteAccount() {
  const [emailValue, setEmailValue] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [reasonText, setReasonText] = useState('');
  return (
    <form className="m-t-20">
      <AdvancedCard
        type={'s-card'}
        footer
        footerContentRight={<Button isLight>Delete</Button>}
      >
        <h3 className="title is-4 is-bold">Delete Account</h3>
        <p className="title is-6 is-narrow is-thin m-1 m-b-2">
          If you delete your groflex account all your data will be lost,
        </p>
        <>
          <div className="columns is-multiline m-b-5">
            <div className="column is-6">
              <div className="field">
                <label>Registered E-mail Address *</label>
                <Input
                  placeholder={'Enter email'}
                  type={'email'}
                  name={'email'}
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                />
              </div>
            </div>

            <div className="column is-6">
              <div className="field">
                <label>Your Password *</label>
                <Input
                  type={'password'}
                  placeholder={'Enter Password'}
                  name={'password'}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="columns is-multiline">
            <div class="column is-12">
              <div class="field">
                <label>Reason</label>
                <div class="control">
                  <TextArea
                    rows={3}
                    name={'reason'}
                    placeholder={
                      'Enter reason to delete account (Your feedback will help us make groflex even better)'
                    }
                    value={reasonText}
                    onChange={(e) => setReasonText(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-multiline m-b-10">
            <div class="column is-12">
              <p className="title is-6 is-thin">
                Please confirm "Delete Account" by clicking confirmation link
                sent to your email address.
              </p>
            </div>
          </div>
        </>
      </AdvancedCard>
    </form>
  );
}

export default DeleteAccount;
