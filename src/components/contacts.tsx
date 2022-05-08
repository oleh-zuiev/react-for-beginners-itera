import React, { Component } from 'react';
type ContactsProps = {
  contact: string;
}
class Contacts extends Component<ContactsProps> {
  render() {
    return (
      <div className="contacts">{this.props.contact}</div>
    )
  }
}
export { Contacts };


// export const Contacts = (props: { contact: string }) => {
//   return <div className="contacts">{props.contact}</div>;
// };
// export { };
