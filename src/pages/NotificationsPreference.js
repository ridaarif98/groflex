import React, { useState } from 'react';
import { Input } from '../components/input/Input';
import { Button } from '../components/button/Button';
import { AdvancedCard } from '../components/cards/AdvancedCard';
import { Switch } from '../components/switch/Switch';

function NotificationsPreference() {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  return (
    <div className="column is-5">
      <AdvancedCard type={'s-card'}>
        <div className="columns is-multiline">
          <div className="column is-8">
            <h3 className="title is-4 is-bold">Your Notifications</h3>
            <p>Recieve your notifications</p>
          </div>
          <div className="column is-4 m-t-35">
            <Switch isSuccess checked={true}></Switch>
          </div>
        </div>
      </AdvancedCard>
      <div className="m-t-15" />
      <form>
        <AdvancedCard
          type={'s-card'}
          footer
          footerContentRight={
            <Button isLight isDisabled>
              Save
            </Button>
          }
        >
          <h3 className="title is-4 is-bold">Send Email Preferences</h3>
          <p className="title is-6 is-thin">
            Your customer emails will be sent under this name and email address
          </p>
          <div className="columns is-multiline">
            <div class="column is-8">
              <div class="field">
                <label>Sender Name*</label>

                <div class="control">
                  <Input
                    type={'text'}
                    className="input"
                    name="sender-name"
                    placeholder="Groflex"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div class="column is-8 m-b-10">
              <div class="field">
                <label>Recipient Email Address *</label>
                <div class="control">
                  <Input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="groflex@gmail.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </AdvancedCard>
      </form>
    </div>
  );
}

export default NotificationsPreference;
