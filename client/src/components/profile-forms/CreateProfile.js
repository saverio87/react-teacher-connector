import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { createProfile } from "../../actions/profile";

import ChooseAvatar from "./ChooseAvatar";

import ProfileImage from "../layout/ProfileImage";

import { Header, Text, PrimaryText } from "../../utils/styledComponents";

import {
  Accordion,
  Button,
  Card,
  Container,
  Form,
  Row,
  Col,
} from "react-bootstrap";

const initialState = {
  sex: "",
  nationality: "",
  avatar: "",
  status: "",
  school: "",
  location: "",
  yearsofexperience: "",
  bio: "",
  phone: "",
  email: "",
  wechat: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  instagram: "",
};

const CreateProfile = ({ auth: { user }, createProfile, history }) => {
  const [formData, setFormData] = useState(initialState);
  const [toggleModal, setToggleModal] = useState(false);

  const onToggleModal = () => setToggleModal((toggleModal) => !toggleModal);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const changeAvatar = (newAvatar) => {
    setFormData({
      ...formData,
      avatar: newAvatar,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  const {
    sex,
    nationality,
    avatar,
    school,
    location,
    status,
    yearsofexperience,
    bio,
    phone,
    email,
    wechat,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  return (
    <>
      {toggleModal ? (
        <ChooseAvatar
          toggleModal={toggleModal}
          changeAvatar={(newAvatar) => changeAvatar(newAvatar)}
          setToggleModal={() => setToggleModal((toggleModal) => !toggleModal)}
        />
      ) : (
        <>
          <Header>
            <Text color="#41a0b3" size="2rem">
              Create your profile
            </Text>
            <Text size="1.2rem">
              Let's get some information to make your profile stand out
            </Text>
          </Header>

          <Card
            style={{
              margin: "2rem 0rem 2rem 0rem",
              border: "2px #41A0B3 solid",
            }}
          >
            <Card.Header
              style={{
                backgroundColor: "#D7E8EB",
              }}
            >
              {" "}
              <div className="d-flex flex-column align-items-center">
                <a onClick={onToggleModal}>
                  <ProfileImage
                    image={avatar && avatar}
                    name={user.name && user.name}
                  />
                </a>
                <Text size="2rem" weight="400">
                  {user && user.name}
                </Text>
              </div>
            </Card.Header>
            <Card.Body>
              {/* Start of our form */}
              <Form onSubmit={(e) => onSubmit(e)}>
                <Accordion flush>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <PrimaryText size="1.5rem" weight="400">
                        User Info
                      </PrimaryText>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form.Group className="mb-3">
                        <Form.Label>Sex</Form.Label>
                        <div className="d-flex d-row">
                          <Form.Check
                            type="checkbox"
                            name="sex"
                            id="male"
                            label="Male"
                            value="male"
                            onChange={(e) => onChange(e)}
                          />

                          <Form.Check
                            type="checkbox"
                            name="sex"
                            label="Female"
                            id="female"
                            value="female"
                            onChange={(e) => onChange(e)}
                          />
                        </div>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Nationality</Form.Label>
                        <Form.Select
                          name="nationality"
                          value={nationality}
                          onChange={(e) => onChange(e)}
                        >
                          <option>Afghanistan</option>
                          <option>Albania</option>
                          <option>Algeria</option>
                          <option>Andorra</option>
                          <option>Angola</option>
                          <option>Antigua and Barbuda</option>
                          <option>Argentina</option>
                          <option>Armenia</option>
                          <option>Aruba</option>
                          <option>Australia</option>
                          <option>Austria</option>
                          <option>Azerbaijan</option>
                          <option>Bahamas, The</option>
                          <option>Bahrain</option>
                          <option>Bangladesh</option>
                          <option>Barbados</option>
                          <option>Belarus</option>
                          <option>Belgium</option>
                          <option>Belize</option>
                          <option>Benin</option>
                          <option>Bhutan</option>
                          <option>Bolivia</option>
                          <option>Bosnia and Herzegovina</option>
                          <option>Botswana</option>
                          <option>Brazil</option>
                          <option>Brunei</option>
                          <option>Bulgaria</option>
                          <option>Burkina Faso</option>
                          <option>Burma</option>
                          <option>Burundi</option>
                          <option>Cambodia</option>
                          <option>Cameroon</option>
                          <option>Canada</option>
                          <option>Cabo Verde</option>
                          <option>Central African Republic</option>
                          <option>Chad</option>
                          <option>Chile</option>
                          <option>China</option>
                          <option>Colombia</option>
                          <option>Comoros</option>
                          <option>Congo, Democratic Republic of the</option>
                          <option>Congo, Republic of the</option>
                          <option>Costa Rica</option>
                          <option>Cote d'Ivoire</option>
                          <option>Croatia</option>
                          <option>Cuba</option>
                          <option>Curacao</option>
                          <option>Cyprus</option>
                          <option>Czech Republic</option>
                          <option>Denmark</option>
                          <option>Djibouti</option>
                          <option>Dominica</option>
                          <option>Dominican Republic</option>
                          <option>East Timor (see Timor-Leste)</option>
                          <option>Ecuador</option>
                          <option>Egypt</option>
                          <option>El Salvador</option>
                          <option>Equatorial Guinea</option>
                          <option>Eritrea</option>
                          <option>Estonia</option>
                          <option>Ethiopia</option>
                          <option>Fiji</option>
                          <option>Finland</option>
                          <option>France</option>
                          <option>Gabon</option>
                          <option>Gambia, The</option>
                          <option>Georgia</option>
                          <option>Germany</option>
                          <option>Ghana</option>
                          <option>Greece</option>
                          <option>Grenada</option>
                          <option>Guatemala</option>
                          <option>Guinea</option>
                          <option>Guinea-Bissau</option>
                          <option>Guyana</option>
                          <option>Haiti</option>
                          <option>Holy See</option>
                          <option>Honduras</option>
                          <option>Hong Kong</option>
                          <option>Hungary</option>
                          <option>Iceland</option>
                          <option>India</option>
                          <option>Indonesia</option>
                          <option>Iran</option>
                          <option>Iraq</option>
                          <option>Ireland</option>
                          <option>Israel</option>
                          <option>Italy</option>
                          <option>Jamaica</option>
                          <option>Japan</option>
                          <option>Jordan</option>
                          <option>Kazakhstan</option>
                          <option>Kenya</option>
                          <option>Kiribati</option>
                          <option>Korea, North</option>
                          <option>Korea, South</option>
                          <option>Kosovo</option>
                          <option>Kuwait</option>
                          <option>Kyrgyzstan</option>
                          <option>Laos</option>
                          <option>Latvia</option>
                          <option>Lebanon</option>
                          <option>Lesotho</option>
                          <option>Liberia</option>
                          <option>Libya</option>
                          <option>Liechtenstein</option>
                          <option>Lithuania</option>
                          <option>Luxembourg</option>
                          <option>Macau</option>
                          <option>Macedonia</option>
                          <option>Madagascar</option>
                          <option>Malawi</option>
                          <option>Malaysia</option>
                          <option>Maldives</option>
                          <option>Mali</option>
                          <option>Malta</option>
                          <option>Marshall Islands</option>
                          <option>Mauritania</option>
                          <option>Mauritius</option>
                          <option>Mexico</option>
                          <option>Micronesia</option>
                          <option>Moldova</option>
                          <option>Monaco</option>
                          <option>Mongolia</option>
                          <option>Montenegro</option>
                          <option>Morocco</option>
                          <option>Mozambique</option>
                          <option>Namibia</option>
                          <option>Nauru</option>
                          <option>Nepal</option>
                          <option>Netherlands</option>
                          <option>New Zealand</option>
                          <option>Nicaragua</option>
                          <option>Niger</option>
                          <option>Nigeria</option>
                          <option>North Korea</option>
                          <option>Norway</option>
                          <option>Oman</option>
                          <option>Pakistan</option>
                          <option>Palau</option>
                          <option>Palestinian Territories</option>
                          <option>Panama</option>
                          <option>Papua New Guinea</option>
                          <option>Paraguay</option>
                          <option>Peru</option>
                          <option>Philippines</option>
                          <option>Poland</option>
                          <option>Portugal</option>
                          <option>Qatar</option>
                          <option>Romania</option>
                          <option>Russia</option>
                          <option>Rwanda</option>
                          <option>Saint Kitts and Nevis</option>
                          <option>Saint Lucia</option>
                          <option>Saint Vincent and the Grenadines</option>
                          <option>Samoa</option>
                          <option>San Marino</option>
                          <option>Sao Tome and Principe</option>
                          <option>Saudi Arabia</option>
                          <option>Senegal</option>
                          <option>Serbia</option>
                          <option>Seychelles</option>
                          <option>Sierra Leone</option>
                          <option>Singapore</option>
                          <option>Sint Maarten</option>
                          <option>Slovakia</option>
                          <option>Slovenia</option>
                          <option>Solomon Islands</option>
                          <option>Somalia</option>
                          <option>South Africa</option>
                          <option>South Korea</option>
                          <option>South Sudan</option>
                          <option>Spain</option>
                          <option>Sri Lanka</option>
                          <option>Sudan</option>
                          <option>Suriname</option>
                          <option>Swaziland</option>
                          <option>Sweden</option>
                          <option>Switzerland</option>
                          <option>Syria</option>
                          <option>Taiwan</option>
                          <option>Tajikistan</option>
                          <option>Tanzania</option>
                          <option>Thailand</option>
                          <option>Timor-Leste</option>
                          <option>Togo</option>
                          <option>Tonga</option>
                          <option>Trinidad and Tobago</option>
                          <option>Tunisia</option>
                          <option>Turkey</option>
                          <option>Turkmenistan</option>
                          <option>Tuvalu</option>
                          <option>Uganda</option>
                          <option>Ukraine</option>
                          <option>United Arab Emirates</option>
                          <option>United Kingdom</option>
                          <option>Uruguay</option>
                          <option>Uzbekistan</option>
                          <option>Vanuatu</option>
                          <option>Venezuela</option>
                          <option>Vietnam</option>
                          <option>Yemen</option>
                          <option>Zambia</option>
                          <option>Zimbabwe</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Location</Form.Label>
                        <Form.Select
                          name="location"
                          value={location}
                          onChange={(e) => onChange(e)}
                        >
                          <option class="province" disabled>
                            Anhui (Province)
                          </option>
                          <option>Anqing</option>
                          <option>Bengbu</option>
                          <option>Hefei</option>
                          <option>Huainan</option>
                          <option>Huangshan</option>
                          <option>Ma’anshan</option>
                          <option>Shexian</option>
                          <option>Tongcheng</option>
                          <option>Tongling</option>
                          <option>Wuhu</option>
                          <option>Xuancheng</option>
                          <option class="province" disabled>
                            Beijing (Provincial-Level Municipality, Capital)
                          </option>
                          <option>Beijing</option>
                          <option class="province" disabled>
                            Chongqing (Provincial-Level Municipality)
                          </option>
                          <option>Chongqing</option>
                          <option>Hechuan</option>
                          <option>Wanzhou</option>
                          <option class="province" disabled>
                            Fujian (Province)
                          </option>
                          <option>Fuzhou</option>
                          <option>Longyan</option>
                          <option>Nanping</option>
                          <option>Quanzhou</option>
                          <option>Sanming</option>
                          <option>Shaowu</option>
                          <option>Xiamen</option>
                          <option>Yong’an</option>
                          <option>Zhangzhou</option>
                          <option class="province" disabled>
                            Gansu (Province)
                          </option>
                          <option>Dunhuang</option>
                          <option>Jiuquan</option>
                          <option>Lanzhou</option>
                          <option>Pingliang</option>
                          <option>Tianshui</option>
                          <option>Wuwei</option>
                          <option>Yumen</option>
                          <option class="province" disabled>
                            Guangdong (Province)
                          </option>
                          <option>Chaozhou</option>
                          <option>Foshan</option>
                          <option>Guangzhou</option>
                          <option>Jiangmen</option>
                          <option>Maoming</option>
                          <option>Meizhou</option>
                          <option>Shantou</option>
                          <option>Shaoguan</option>
                          <option>Shenzhen</option>
                          <option>Zhanjiang</option>
                          <option>Zhaoqing</option>
                          <option>Zhongshan</option>
                          <option class="province" disabled>
                            Guangxi (Autonomous Region)
                          </option>
                          <option>Baise</option>
                          <option>Beihai</option>
                          <option>Guilin</option>
                          <option>Liuzhou</option>
                          <option>Nanning</option>
                          <option>Pingxiang</option>
                          <option>Wuzhou</option>
                          <option>Yulin</option>
                          <option class="province" disabled>
                            Guizhou (Province)
                          </option>
                          <option>Anshun</option>
                          <option>Duyun</option>
                          <option>Guiyang</option>
                          <option>Zunyi</option>
                          <option class="province" disabled>
                            Hainan (Province)
                          </option>
                          <option>Haikou</option>
                          <option class="province" disabled>
                            Hebei (Province)
                          </option>
                          <option>Baoding</option>
                          <option>Cangzhou</option>
                          <option>Chengde</option>
                          <option>Handan</option>
                          <option>Kalgan</option>
                          <option>Qinhuangdao</option>
                          <option>Shanhaiguan</option>
                          <option>Shijiazhuang</option>
                          <option>Tangshan</option>
                          <option>Xingtai</option>
                          <option>Xuanhua</option>
                          <option>Zhengding</option>
                          <option class="province" disabled>
                            Heilongjiang (Province)
                          </option>
                          <option>Acheng</option>
                          <option>Binxian</option>
                          <option>Harbin</option>
                          <option>Hegang</option>
                          <option>Hulan</option>
                          <option>Jiamusi</option>
                          <option>Jixi</option>
                          <option>Mudanjiang</option>
                          <option>Qiqihar</option>
                          <option>Shuangyashan</option>
                          <option>Yichun</option>
                          <option class="province" disabled>
                            Henan (Province)
                          </option>
                          <option>Anyang</option>
                          <option>Hebi</option>
                          <option>Jiaozuo</option>
                          <option>Kaifeng</option>
                          <option>Luohe</option>
                          <option>Luoyang</option>
                          <option>Nanyang</option>
                          <option>Shangqiu</option>
                          <option>Xinxiang</option>
                          <option>Xinyang</option>
                          <option>Xuchang</option>
                          <option>Zhengzhou</option>
                          <option>Zhoukou</option>
                          <option class="province" disabled>
                            Hong Kong (Special Administrative Region)
                          </option>
                          <option>Hong Kong</option>
                          <option>Victoria</option>
                          <option class="province" disabled>
                            Hubei (Province)
                          </option>
                          <option>Daye</option>
                          <option>Hankou</option>
                          <option>Hanyang</option>
                          <option>Huangshi</option>
                          <option>Jingzhou</option>
                          <option>Laohekou</option>
                          <option>Wuchang</option>
                          <option>Wuhan</option>
                          <option>Xiangfan</option>
                          <option>Yichang</option>
                          <option class="province" disabled>
                            Hunan (Province)
                          </option>
                          <option>Changde</option>
                          <option>Changsha</option>
                          <option>Hengyang</option>
                          <option>Jinshi</option>
                          <option>Shaoyang</option>
                          <option>Xiangtan</option>
                          <option>Yiyang</option>
                          <option>Yueyang</option>
                          <option>Zhuzhou</option>
                          <option class="province" disabled>
                            Inner Mongolia (Autonomous Region)
                          </option>
                          <option>Baotou</option>
                          <option>Chifeng</option>
                          <option>Duolun</option>
                          <option>Erenhot</option>
                          <option>Hailar</option>
                          <option>Hohhot</option>
                          <option>Jining</option>
                          <option>Manzhouli</option>
                          <option>Tongliao</option>
                          <option class="province" disabled>
                            Jiangsu (Province)
                          </option>
                          <option>Changshu</option>
                          <option>Changzhou</option>
                          <option>Huai’an</option>
                          <option>Huaiyin</option>
                          <option>Lianyungang</option>
                          <option>Nanjing</option>
                          <option>Nantong</option>
                          <option>Suzhou</option>
                          <option>Taizhou</option>
                          <option>Wuxi</option>
                          <option>Xuzhou</option>
                          <option>Yancheng</option>
                          <option>Yangzhou</option>
                          <option>Zhenjiang</option>
                          <option class="province" disabled>
                            Jiangxi (Province)
                          </option>
                          <option>Ganzhou</option>
                          <option>Ji’an</option>
                          <option>Jingdezhen</option>
                          <option>Jiujiang</option>
                          <option>Nanchang</option>
                          <option>Pingxiang</option>
                          <option>Shangrao</option>
                          <option>Zhangshu</option>
                          <option class="province" disabled>
                            Jilin (Province)
                          </option>
                          <option>Baicheng</option>
                          <option>Changchun</option>
                          <option>Jilin</option>
                          <option>Liaoyuan</option>
                          <option>Siping</option>
                          <option>Tonghua</option>
                          <option>Yanji</option>
                          <option class="province" disabled>
                            Liaoning (Province)
                          </option>
                          <option>Anshan</option>
                          <option>Beipiao</option>
                          <option>Benxi</option>
                          <option>Dalian</option>
                          <option>Dandong</option>
                          <option>Fushun</option>
                          <option>Fuxin</option>
                          <option>Jinzhou (southern Liaoning)</option>
                          <option>Jinzhou (western Liaoning)</option>
                          <option>Liaoyang</option>
                          <option>Lüshun</option>
                          <option>Shenyang</option>
                          <option>Wafangdian</option>
                          <option>Yingkou</option>
                          <option class="province" disabled>
                            Macau (Special Administrative Region)
                          </option>
                          <option>Macau</option>
                          <option class="province" disabled>
                            Ningxia (Autonomous Region)
                          </option>
                          <option>Yinchuan</option>
                          <option class="province" disabled>
                            Qinghai (Province)
                          </option>
                          <option>Golmud</option>
                          <option>Lenghu</option>
                          <option>Xining</option>
                          <option class="province" disabled>
                            Shaanxi (Province)
                          </option>
                          <option>Ankang</option>
                          <option>Baoji</option>
                          <option>Hanzhong</option>
                          <option>Shangluo</option>
                          <option>Tongguan</option>
                          <option>Xi’an</option>
                          <option>Xianyang</option>
                          <option>Yan’an</option>
                          <option class="province" disabled>
                            Shandong (Province)
                          </option>
                          <option>Dezhou</option>
                          <option>Jinan</option>
                          <option>Jining</option>
                          <option>Linzi</option>
                          <option>Qingdao</option>
                          <option>Qufu</option>
                          <option>Weifang</option>
                          <option>Weihai</option>
                          <option>Yantai</option>
                          <option>Zaozhuang</option>
                          <option>Zibo</option>
                          <option class="province" disabled>
                            Shanghai (Provincial-Level Municipality)
                          </option>
                          <option>Shanghai</option>
                          <option class="province" disabled>
                            Shanxi (Province)
                          </option>
                          <option>Changzhi</option>
                          <option>Datong</option>
                          <option>Jinzhong</option>
                          <option>Linfen</option>
                          <option>Puzhou</option>
                          <option>Taiyuan</option>
                          <option>Yangquan</option>
                          <option class="province" disabled>
                            Sichuan (Province)
                          </option>
                          <option>Chengdu</option>
                          <option>Kangding</option>
                          <option>Luzhou</option>
                          <option>Mianyang</option>
                          <option>Nanchong</option>
                          <option>Neijiang</option>
                          <option>Wutongqiao</option>
                          <option>Ya’an</option>
                          <option>Yibin</option>
                          <option>Zigong</option>
                          <option class="province" disabled>
                            Tianjin (Provincial-Level Municipality)
                          </option>
                          <option>Tanggu</option>
                          <option>Tianjin</option>
                          <option>Tibet (Autonomous Region)</option>
                          <option>Gartok</option>
                          <option>Gyangzê</option>
                          <option>Lhasa</option>
                          <option>Xigazê</option>
                          <option class="province" disabled>
                            Xinjiang (Autonomous Region)
                          </option>
                          <option>Hami</option>
                          <option>Hotan</option>
                          <option>Karamay</option>
                          <option>Kashgar</option>
                          <option>Kucha</option>
                          <option>Kuldja</option>
                          <option>Shihezi</option>
                          <option>Turfan</option>
                          <option>Ürümqi</option>
                          <option>Yarkand</option>
                          <option class="province" disabled>
                            Yunnan (Province)
                          </option>
                          <option>Dali</option>
                          <option>Gejiu</option>
                          <option>Jinghong</option>
                          <option>Kaiyuan</option>
                          <option>Kunming</option>
                          <option>Pu’er</option>
                          <option class="province" disabled>
                            Zhejiang (Province)
                          </option>
                          <option>Fenghua</option>
                          <option>Hangzhou</option>
                          <option>Huzhou</option>
                          <option>Jiaxing</option>
                          <option>Jinhua</option>
                          <option>Ningbo</option>
                          <option>Quzhou</option>
                          <option>Shaoxing</option>
                          <option>Wenzhou</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>School name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="School"
                          name="school"
                          value={school}
                          onChange={(e) => onChange(e)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Position</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="* EAL teacher, Math / Physics teacher, etc."
                          name="status"
                          value={status}
                          onChange={(e) => onChange(e)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Years of experience</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          name="yearsofexperience"
                          value={yearsofexperience}
                          onChange={(e) => onChange(e)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="A short bio of yourself"
                          name="bio"
                          value={bio}
                          onChange={(e) => onChange(e)}
                        />
                      </Form.Group>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <PrimaryText size="1.5rem" weight="400">
                        Contact Info
                      </PrimaryText>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form.Group className="mb-3">
                        <Form.Label>Wechat ID</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          name="wechat"
                          value={wechat}
                          onChange={(e) => onChange(e)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Work number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          name="phone"
                          value={phone}
                          onChange={(e) => onChange(e)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          name="email"
                          value={email}
                          onChange={(e) => onChange(e)}
                        />
                      </Form.Group>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <PrimaryText size="1.5rem" weight="400">
                        Social Network Links
                      </PrimaryText>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form.Group className="mb-3">
                        <Row>
                          <Col sm={2}>
                            <Form.Label>
                              <i class="fab fa-twitter fa-2x" />
                            </Form.Label>
                          </Col>
                          <Col sm={10}>
                            <Form.Control
                              type="text"
                              placeholder="Twitter URL"
                              name="twitter"
                              value={twitter}
                              onChange={(e) => onChange(e)}
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Row>
                          <Col sm={2}>
                            <Form.Label>
                              <i class="fab fa-facebook fa-2x" />
                            </Form.Label>
                          </Col>
                          <Col sm={10}>
                            <Form.Control
                              type="text"
                              placeholder="Facebook URL"
                              name="facebook"
                              value={facebook}
                              onChange={(e) => onChange(e)}
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Row>
                          <Col sm={2}>
                            <Form.Label>
                              <i class="fab fa-youtube fa-2x" />
                            </Form.Label>
                          </Col>
                          <Col sm={10}>
                            <Form.Control
                              type="text"
                              placeholder="YouTube URL"
                              name="youtube"
                              value={youtube}
                              onChange={(e) => onChange(e)}
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Row>
                          <Col sm={2}>
                            <Form.Label>
                              <i class="fab fa-linkedin fa-2x" />
                            </Form.Label>
                          </Col>
                          <Col sm={10}>
                            <Form.Control
                              type="text"
                              placeholder="Linkedin URL"
                              name="linkedin"
                              value={linkedin}
                              onChange={(e) => onChange(e)}
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Row>
                          <Col sm={2}>
                            <Form.Label>
                              <i class="fab fa-instagram fa-2x" />
                            </Form.Label>
                          </Col>
                          <Col sm={10}>
                            <Form.Control
                              type="text"
                              placeholder="Instagram URL"
                              name="instagram"
                              value={instagram}
                              onChange={(e) => onChange(e)}
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Container className="my-3 d-grid text-center">
                  <Button variant="primary" size="lg" type="submit">
                    Submit
                  </Button>
                </Container>
              </Form>
              {/* End of our form */}
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
