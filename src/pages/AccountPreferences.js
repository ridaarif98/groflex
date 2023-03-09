import React from 'react';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';
import NotificationsPreference from './NotificationsPreference';

function AccountPreference() {
  return (
    <div className="view-wrapper is-pushed-full">
      <div className="page-content-wrapper">
        <div className="page-content is-relative">
          <div className="page-content-inner">
            <div className="tabs-wrapper m-t-5">
              <div
                id="account-preference-tab"
                className="tab-content is-active"
              >
                <div className="columns is-multiline">
                  <div className="column is-7">
                    <ChangePassword />
                    <div className="m-t-15" />
                    <DeleteAccount />
                  </div>

                  <NotificationsPreference />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPreference;
