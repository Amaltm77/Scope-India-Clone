import React from 'react'
import './Register.css'
import Locations from './../../components/Locations/Locations';
import Footer from './../../components/Footer/Footer';

export default function Register() {
    return (
        <div className='registercontent'>
            <div className="wrapperregitser">
                <div className="regwrapper">
                    <div className="wrapperregisterhead">
                        <h1>Registration</h1>
                        <h2>It's just a matter of 80 days to an IT job!</h2>
                    </div>
                    <form method='POST'>
                        <div className="formdivreg wrap valign-top bg-cover move-up mcb-wrap">
                            <div className="mcb-wrap-inner inputformleft">
                                <div className="column mcb-column regformleftinner">
                                    <ul className="reg_form_ul">
                                        <li className="callback_field">
                                            <label htmlFor="reg_full_name" className="reg_full_name">Full Name (required)</label>
                                            <input type="text" className="form-control mb-2 call_back_form_ele" id='reg_full_name' name='reg_full_name' minLength="3" required />
                                        </li>
                                        <li className="callback_field">
                                            <label htmlFor="reg_date_of_birth" className="reg_date_of_birth">Date of Birth (required)</label>
                                            <input type="date" className="form-control call_back_form_ele" id='reg_date_of_birth' name='reg_date_of_birth' placeholder='dd/mm/yyyy' required />
                                        </li>
                                        <li className="callback_field">
                                            <label htmlFor="reg_form_label">Gender (required)</label><br />
                                            <label htmlFor="reg_gender1" className="reg_form_label" style={{ display: 'inline' }}><input type="radio" id="reg_gender1" name='reg_gender' value="Male" required />Male</label>
                                            <label htmlFor="reg_gender2" className="reg_form_label" style={{ display: 'inline' }}><input type="radio" id="reg_gender2" name='reg_gender' value="Female" required />Female</label>
                                            <label htmlFor="reg_gender3" className="reg_form_label" style={{ display: 'inline' }}><input type="radio" id="reg_gender3" name='reg_gender' value="Other" required />Other</label>
                                        </li>
                                        <li className="callback_field">
                                            <label htmlFor="reg_qualification" className="reg_form_label">Educational Qualification</label>
                                            <input type="text" className="form-control call_back_form_ele" id='reg_qualification' name='reg_qualification' minLength="2" maxLength="40" />
                                        </li>
                                        <li className="callback_field">
                                            <label htmlFor="reg_course" className="red_form_label">Choose your course (required)</label>
                                            <select name="reg_course" id="reg_course" className="form-control" title='Select Preferred Courses From the List' required>
                                                <option value="">Choose your Course!</option>
                                                <optgroup label="Software Programming Courses">
                                                    <option value="80">PHP Advanced Full Stack Software Internship</option>
                                                    <option value="95">PHP Intermediate Full Stack Software Internship</option>
                                                    <option value="82">PYTHON Advanced Full Stack Software Internship</option>
                                                    <option value="91">PYTHON Intermediate Full Stack Software Internship</option>
                                                    <option value="81">JAVA Advanced Full Stack Software Internship</option>
                                                    <option value="92">JAVA Intermediate Full Stack Software Internship</option>
                                                    <option value="97">.NET Core Advanced Full Stack Software Internship</option>
                                                    <option value="96">.NET MVC Intermediate Full Stack Software Internship</option>
                                                    <option value="98">MEAN Full Stack Software Internship</option>
                                                    <option value="99">MERN Full Stack Software Internship</option>
                                                    <option value="70">Python Guru (Adv. Data Scientist)</option>
                                                    <option value="61">Advanced Python (Python/Django/MySQL)</option>
                                                    <option value="60">Google Flutter Mobile App Development(iOS/ Android)</option>
                                                    <option value="12">Digital Marketing Master Program</option>
                                                </optgroup>
                                                <optgroup label='Software Testing Courses'>
                                                    <option value="83">Software Testing Advanced Internship (Manual/Automation)</option>
                                                    <option value="100">Software Testing Intermediate Internship (Manual/Automation)</option>
                                                    <option value="53">Software Testing Manual (ISTQB)</option>
                                                    <option value="102">ISTQB Certification (EXAM Reg.)</option>
                                                    <option value="101">Selenium TestNG & Cucumber/Appium Mobile/QTP/Loadrunner/Jmeter/Jira</option>
                                                </optgroup>
                                                <optgroup label="Computer Networking & Server Courses">
                                                    <option value="18">Computer Networking (CCNA)</option>
                                                    <option value="19">Server Admin (MCSE)</option>
                                                    <option value="20">Server Admin (RHCE)</option>
                                                    <option value="13">Networking & Server Admin (CCNA/MCSE/Hardware)</option>
                                                    <option value="14">Networking & Server Admin (CCNA/RHCE/Hardware)</option>
                                                    <option value="16">Networking & Server Admin (CCNA/MCSE/RHCE/Hardware)</option>
                                                    <option value="15">Security Surveillance & Networking Internship (CCNA/CCTV/Hardware)</option>
                                                </optgroup>
                                                <optgroup label="Cloud Computing Courses">
                                                    <option value="45">Cloud Admin (AWS/MS AZURE)</option>
                                                    <option value="62">Cloud & Networking Admin (CCNA/AWS/Hardware)</option>
                                                    <option value="63">Cloud & Networking Admin (CCNA/MS Azure/Hardware)</option>
                                                    <option value="93">Cloud & Networking Admin (CCNA/AWS)</option>
                                                    <option value="94">Cloud & Networking Admin (CCNA/MS Azure)</option>
                                                    <option value="59">Cloud & Server Admin (MCSE/AWS/Hardware)</option>
                                                    <option value="71">Cloud & Server Admin (MCSE/MS Azure/Hardware)</option>
                                                    <option value="55">Cloud & Server Admin (RHCE/AWS/Hardware)</option>
                                                    <option value="103">Cloud & Server Admin (RHCE/MS Azure/Hardware)</option>
                                                    <option value="104">Cloud, Networking, & Server Admin (CCNA/AWS/AZURE/MCSE/RHCE/Hardware)</option>
                                                </optgroup>
                                                <optgroup label="Others">
                                                    <option value="">Academic Project</option>
                                                    <option value="30">MS Office (Word/Excel/Power Point/Outlook)</option>
                                                    <option value="107">Data Analytics</option>
                                                    <option value="105">Advanced MS Excel</option>
                                                    <option value="31">Graphic Designing (Photoshop)</option>
                                                    <option value="106">Graphic Designing (Photoshop/Illustrator)</option>
                                                    <option value="0">None of the above, will discuss directly</option>
                                                </optgroup>
                                            </select>
                                        </li>
                                        <li className='callback_field'>
                                            <label htmlFor='reg_mobile_number' className="reg_form_label">Mobile Number (required)</label>
                                            <input type="tel" className="form-control call_back_form_ele" id='reg_mobile_number' name='reg_mobile_number' minLength="10" maxLength="15" pattern="\+?\d+" required />
                                        </li>
                                        <li className="callback_field">
                                            <label className="reg_form_label">Training Mode (required)</label><br />
                                            <label for="reg_training_mode1" className="reg_form_label" style={{ display: 'inline' }}><input type="radio" id="reg_training_mode1" name="reg_training_mode" value="Online" required /> Live online</label>
                                            <label for="reg_training_mode2" className="reg_form_label" style={{ display: 'inline' }}><input type="radio" id="reg_training_mode2" name="reg_training_mode" value="Offline" required /> Classroom</label>
                                        </li><br />
                                        <li className="callback_field">
                                            <label class="reg_form_label">SCOPE INDIA Location (required)</label><br />
                                            <label for="reg_training_location5" className="reg_form_label" style={{ display: 'inline-block' }}><input type="radio" id="reg_training_location5" name="reg_training_location" value="Technopark TVM" required /> Technopark TVM</label>
                                            <label for="reg_training_location1" className="reg_form_label" style={{ display: 'inline-block' }}><input type="radio" id="reg_training_location1" name="reg_training_location" value="Thampanoor TVM" required /> Thampanoor TVM</label>
                                            <label for="reg_training_location2" className="reg_form_label" style={{ display: 'inline-block' }}><input type="radio" id="reg_training_location2" name="reg_training_location" value="Kochi" required /> Kochi</label>
                                            <label for="reg_training_location3" className="reg_form_label" style={{ display: 'inline-block' }}><input type="radio" id="reg_training_location3" name="reg_training_location" value="Nagercoil" required /> Nagercoil</label>
                                            <label for="reg_training_location4" className="reg_form_label" style={{ display: 'inline-block' }}><input type="radio" id="reg_training_location4" name="reg_training_location" value="Online" required /> Online</label>
                                        </li>
                                        <li id="call_back_error" className="display:none;"></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="column mcb-column one-second inputformright">
                                <ul className="reg_form_ul">
                                    <li className="callback_field">
                                        <label for="reg_guardian_name" className="reg_form_label">Guardian's Name</label>
                                        <input type="text" className="form-control mb-2 call_back_form_ele" id="reg_guardian_name" name="reg_guardian_name" minlength="3" maxlength="40" placeholder="" />
                                    </li>
                                    <li className="callback_field">
                                        <label for="reg_guardian_occupation" className="reg_form_label">Guardian's Occupation</label>
                                        <input type="text" className="form-control call_back_form_ele" id="reg_guardian_occupation" name="reg_guardian_occupation" minlength="4" maxlength="40" placeholder="" />
                                    </li>
                                    <li className="callback_field">
                                        <label for="reg_date_of_birth" className="reg_form_label">Preferred Training Timings (required)</label><br />
                                        <label for="reg_preferred_timings1" className="reg_form_label" style={{ display: 'inline' }}><input type="checkbox" id="reg_preferred_timings1" name="reg_preferred_timings[]" value="Between 7am - 10am" /> Between 7am - 10am</label><br />
                                        <label for="reg_preferred_timings2" className="reg_form_label" style={{ display: 'inline' }}><input type="checkbox" id="reg_preferred_timings2" name="reg_preferred_timings[]" value="Between 9am - 1pm" /> Between 9am - 1pm</label><br />
                                        <label for="reg_preferred_timings3" className="reg_form_label" style={{ display: 'inline' }}><input type="checkbox" id="reg_preferred_timings3" name="reg_preferred_timings[]" value="Between 1pm - 6pm" /> Between 1pm - 6pm</label><br />
                                        <label for="reg_preferred_timings4" className="reg_form_label" style={{ display: 'inline' }}><input type="checkbox" id="reg_preferred_timings4" name="reg_preferred_timings[]" value="Between 6pm - 10pm" /> Between 6pm - 10pm</label>
                                    </li>
                                    <li className="callback_field">
                                        <label for="reg_address" className="reg_form_label">Address</label>
                                        <input type="text" className="form-control call_back_form_ele" id="reg_address" name="reg_address" minlength="8" maxlength="150" placeholder="" />
                                    </li>
                                    <li className="callback_field">
                                        <label for="reg_country" className="reg_form_label">Country</label>
                                        <input type="text" className="form-control call_back_form_ele" id="reg_country" name="reg_country" minlength="3" maxlength="60" placeholder="" />
                                    </li>
                                    <li className="callback_field">
                                        <label for="reg_state" className="reg_form_label">State</label>
                                        <input type="text" className="form-control call_back_form_ele" id="reg_state" name="reg_state" minlength="3" maxlength="60" placeholder="" />
                                    </li>
                                    <li className="callback_field">
                                        <label for="reg_city" className="reg_form_label">City</label>
                                        <input type="text" className="form-control call_back_form_ele" id="reg_city" name="reg_city" minlength="3" maxlength="60" placeholder="" />
                                    </li>
                                    <li className="callback_field">
                                        <label for="reg_zip" className="reg_form_label">PIN/Zip Code</label>
                                        <input type="text" className="form-control call_back_form_ele" id="reg_zip" name="reg_zip" minlength="3" maxlength="10" placeholder="" />
                                    </li>
                                    <li><button id="call_back_visitor_click" className="btn mb-2 call_back_form_ele">Complete Registration </button></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                    <div className="dib">
                        <Locations />
                    </div>
                </div>
                <div className="closer"></div>
            </div>
        <div className="footerreg">
            <Footer/>
        </div>
        </div>
    )
}
