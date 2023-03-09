import React, { useState } from 'react';
import { Input } from '../components/input/Input';
import { Button } from '../components/button/Button';
import { TextArea } from '../components/textarea/TextArea';
import { AdvancedCard } from '../components/cards/AdvancedCard';
import { Switch } from '../components/switch/Switch';

function ChangePassword() {
  const [emailValue, setEmailValue] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  return (
    <form>
      <AdvancedCard
        type={'s-card'}
        footer
        footerContentRight={<Button isLight>Save</Button>}
      >
        <h2 className="title is-4 is-bold">Personal Information</h2>
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
                <label>Current Password *</label>
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
          <div className="columns is-multiline m-b-10">
            <div class="column is-12">
              <div class="field">
                <label>New password *</label>
                <div class="control">
                  <Input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Enter Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      </AdvancedCard>
    </form>
  );
}

export default ChangePassword;
