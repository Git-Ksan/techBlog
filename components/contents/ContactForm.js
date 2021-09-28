import React from "react";

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isSubmitted: false,
      };
    }
  
    handleSubmit(){
      this.setState({isSubmitted:true})
    }
  
    render() {
      let contactForm;
      if (this.state.isSubmitted) {
        contactForm = (
          <div className='contact-submit-message contents-p'>
            送信完了
          </div>
        );
      } else {
        contactForm = (
          <form  onSubmit={()=>{this.handleSubmit()}} >
            <p className="contents-p">メールアドレス（必須）</p>
            <input  type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    className="contents-input1 items-center"
            />
            <p className="contents-p">お問い合わせ内容（必須）</p>
            <textarea   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        className="contents-input2 items-center"            
            />
            <input
              type='submit'
              value='送信'
              class="shadow-lg px-2 py-1  bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500"
            />
          </form>
        );
      }
  
      return (
        <div className='contact-form'>
            <h1 className="contents-h1">お問い合わせ</h1>
            {contactForm}
        </div>
      );
    }
  }

export default ContactForm;
