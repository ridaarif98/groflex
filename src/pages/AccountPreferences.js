import React, { useState } from 'react';
import { Input } from '../components/input/Input';
import { Button } from '../components/button/Button';
import { TextArea } from '../components/textarea/TextArea';
import { AdvancedCard } from '../components/cards/AdvancedCard';
import { Switch } from '../components/switch/Switch';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';
import NotificationsPreference from './NotificationsPreference';
// function ChangePassword() {
//   const [emailValue, setEmailValue] = useState('');
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   return (
//     <form>
//       <AdvancedCard
//         type={'s-card'}
//         footer
//         footerContentRight={<Button isLight>Save</Button>}
//       >
//         <h2 className="title is-4 is-bold">Personal Information</h2>
//         <>
//           <div className="columns is-multiline m-b-5">
//             <div className="column is-6">
//               <div className="field">
//                 <label>Registered E-mail Address *</label>
//                 <Input
//                   placeholder={'Enter email'}
//                   type={'email'}
//                   name={'email'}
//                   value={emailValue}
//                   onChange={(e) => setEmailValue(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="column is-6">
//               <div className="field">
//                 <label>Current Password *</label>
//                 <Input
//                   type={'password'}
//                   placeholder={'Enter Password'}
//                   name={'password'}
//                   value={currentPassword}
//                   onChange={(e) => setCurrentPassword(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="columns is-multiline m-b-10">
//             <div class="column is-12">
//               <div class="field">
//                 <label>New password *</label>
//                 <div class="control">
//                   <Input
//                     type="password"
//                     className="input"
//                     name="password"
//                     placeholder="Enter Password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       </AdvancedCard>
//     </form>
//   );
// // }

// function DeleteAccount() {
//   const [emailValue, setEmailValue] = useState('');
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [reasonText, setReasonText] = useState('');
//   return (
//     <form className="m-t-20">
//       <AdvancedCard
//         type={'s-card'}
//         footer
//         footerContentRight={<Button isLight>Delete</Button>}
//       >
//         <h3 className="title is-4 is-bold">Delete Account</h3>
//         <p className="title is-6 is-narrow is-thin m-1 m-b-2">
//           If you delete your groflex account all your data will be lost,
//         </p>
//         <>
//           <div className="columns is-multiline m-b-5">
//             <div className="column is-6">
//               <div className="field">
//                 <label>Registered E-mail Address *</label>
//                 <Input
//                   placeholder={'Enter email'}
//                   type={'email'}
//                   name={'email'}
//                   value={emailValue}
//                   onChange={(e) => setEmailValue(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="column is-6">
//               <div className="field">
//                 <label>Your Password *</label>
//                 <Input
//                   type={'password'}
//                   placeholder={'Enter Password'}
//                   name={'password'}
//                   value={currentPassword}
//                   onChange={(e) => setCurrentPassword(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="columns is-multiline">
//             <div class="column is-12">
//               <div class="field">
//                 <label>Reason</label>
//                 <div class="control">
//                   <TextArea
//                     rows={3}
//                     name={'reason'}
//                     placeholder={
//                       'Enter reason to delete account (Your feedback will help us make groflex even better)'
//                     }
//                     value={reasonText}
//                     onChange={(e) => setReasonText(e.target.value)}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="columns is-multiline m-b-10">
//             <div class="column is-12">
//               <p className="title is-6 is-thin">
//                 Please confirm "Delete Account" by clicking confirmation link
//                 sent to your email address.
//               </p>
//             </div>
//           </div>
//         </>
//       </AdvancedCard>
//     </form>
//   );
// }

// function NotificationsPreference() {
//   const [senderName, setSenderName] = useState('');
//   const [senderEmail, setSenderEmail] = useState('');
//   return (
//     <div className="column is-5">
//       <AdvancedCard type={'s-card'}>
//         <div className="columns is-multiline">
//           <div className="column is-8">
//             <h3 className="title is-4 is-bold">Your Notifications</h3>
//             <p>Recieve your notifications</p>
//           </div>
//           <div className="column is-4 m-t-35">
//             <Switch isSuccess checked={true}></Switch>
//           </div>
//         </div>
//       </AdvancedCard>
//       <div className="m-t-15" />
//       <form>
//         <AdvancedCard
//           type={'s-card'}
//           footer
//           footerContentRight={
//             <Button isLight isDisabled>
//               Save
//             </Button>
//           }
//         >
//           <h3 className="title is-4 is-bold">Send Email Preferences</h3>
//           <p className="title is-6 is-thin">
//             Your customer emails will be sent under this name and email address
//           </p>
//           <div className="columns is-multiline">
//             <div class="column is-8">
//               <div class="field">
//                 <label>Sender Name*</label>

//                 <div class="control">
//                   <Input
//                     type={'text'}
//                     className="input"
//                     name="sender-name"
//                     placeholder="Groflex"
//                     value={senderName}
//                     onChange={(e) => setSenderName(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//             <div class="column is-8 m-b-10">
//               <div class="field">
//                 <label>Recipient Email Address *</label>
//                 <div class="control">
//                   <Input
//                     type="email"
//                     className="input"
//                     name="email"
//                     placeholder="groflex@gmail.com"
//                     value={senderEmail}
//                     onChange={(e) => setSenderEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </AdvancedCard>
//       </form>
//     </div>
//   );
// }

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
