import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { addReview } from "../../actions/review";
import emojiList from "../../utils/emojiList";
import Emoji from "./Emoji";

import {
  Accordion,
  Badge,
  Button,
  Card,
  Container,
  Row,
  Col,
  Image,
  Form,
} from "react-bootstrap";
import { Text, PrimaryText, PrimaryButton } from "../../utils/styledComponents";

const initialState = {
  emoticon: "",
  school: "",
  schooltype: "",
  location: "",
  duration: "",
  employmentstatus: "",
  salary: "",
  perks: [],
  visahelp: "",
  legalexpenses: "",
  accommodation: "",
  career: "",
  rating: {
    balance: 0,
    workplace: 0,
    management: 0,
    benefits: 0,
  },
  pros: "",
  cons: "",
  comments: "",
  recommend: "",
  advice: "",
};

const ReviewForm = ({ addReview }) => {
  // States

  const [formData, setFormData] = useState(initialState);

  // Destructure initial state

  const {
    emoticon,
    school,
    schooltype,
    location,
    duration,
    employmentstatus,
    salary,
    perks,
    visahelp,
    legalexpenses,
    accommodation,
    career,
    rating,
    pros,
    cons,
    comments,
    recommend,
    advice,
  } = formData;

  /* setFormData({
      ...formData,
      rating: {
        ...rating,
        overall: parseFloat(
          (rating.balance +
            rating.workplace +
            rating.benefits +
            rating.management) /
            4
          //(parseInt(Object.keys(rating).length) - 1)
        ),
      },
    }); */

  // Event listeners

  // Update the state as form gets filled out

  const onChangeEmoji = (e) => {
    setFormData({
      ...formData,
      emoticon: e,
    });
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Benefits / Perks array
  const onToggle = (e) => {
    e.target.checked
      ? setFormData({
          ...formData,
          perks: [...perks, e.target.name],
        })
      : setFormData({
          ...formData,
          perks: perks.filter((perk) => perk !== e.target.name),
        });
  };

  // Rating the school, everytime this function is called it
  // updates the relevant property and automatically calculates
  // the average overall rating score

  const onRate = async (e) => {
    e.target.checked &&
      setFormData({
        ...formData,
        rating: {
          ...rating,
          [e.target.name]: parseInt(e.target.value),
        },
      });
  };

  // Submitting the form data

  const onSubmit = async (e) => {
    e.preventDefault();
    // Post request - Submitting the form
    addReview({ formData });
    // Resetting the object and the form to its initial state
    setFormData(initialState);
  };

  return (
    <>
      <Card
        style={{
          margin: "2rem 0rem 2rem 0rem",
          border: "0.15rem #41A0B3 solid",
        }}
      >
        <Card.Header
          style={{
            backgroundColor: "#D7E8EB",
          }}
        >
          {" "}
          <div className="d-flex flex-column text-center">
            <PrimaryText size="2.2rem" weight="600">
              Leave A Review
            </PrimaryText>
            <Text size="1.5rem" weight="400">
              Leave a review of a school that you have worked for in the past -
              or even your current school.
            </Text>

            <Emoji formData={formData} setFormData={setFormData} />
          </div>
        </Card.Header>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <PrimaryText size="1.5rem" weight="400">
                    General information
                  </PrimaryText>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          Name of the school{" "}
                        </PrimaryText>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="school"
                        value={school}
                        onChange={(e) => onChange(e)}
                        placeholder="School name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          {" "}
                          Type of School
                        </PrimaryText>
                      </Form.Label>
                      <Form.Select
                        required
                        name="schooltype"
                        value={schooltype}
                        onChange={(e) => onChange(e)}
                      >
                        <option>Agency</option>
                        <option>Kindergarten</option>
                        <option>Public school</option>
                        <option>Private / Bilingual school</option>
                        <option>International school</option>
                        <option>University / College</option>
                        <option>Language school / Training center</option>
                        <option>Online school</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          Location
                        </PrimaryText>
                      </Form.Label>
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
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          I worked / I have been working at this school for ...
                        </PrimaryText>
                      </Form.Label>
                      <Form.Select
                        name="duration"
                        value={duration}
                        onChange={(e) => onChange(e)}
                        required
                      >
                        <option>Less than a year</option>
                        <option>1 year</option>
                        <option>2 years</option>
                        <option>3 years</option>
                        <option>More than 3 years</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          Employment status
                        </PrimaryText>
                      </Form.Label>
                      <Form.Select
                        name="employmentstatus"
                        value={employmentstatus}
                        onChange={(e) => onChange(e)}
                        required
                      >
                        <option>Full-time</option>
                        <option>Part-time</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <PrimaryText size="1.5rem" weight="400">
                    Salary and Benefits
                  </PrimaryText>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          What is the average monthly salary for teachers?{" "}
                        </PrimaryText>
                      </Form.Label>
                      <Form.Select
                        name="salary"
                        value={salary}
                        onChange={(e) => onChange(e)}
                        required
                      >
                        <option>Less than 8000 rmb</option>
                        <option>8000 - 15000 rmb</option>
                        <option>15000 - 20000 rmb</option>
                        <option>20000 - 30000 rmb</option>
                        <option>More than 30000 rmb</option>
                        <option>I am not sure</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group
                      value={perks}
                      onChange={(e) => onToggle(e)}
                      className="mb-3"
                    >
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          Which of the following perks and benefits does the
                          school offer?
                        </PrimaryText>
                      </Form.Label>
                      <div>
                        <Form.Check
                          inline
                          name="Free housing"
                          label="Free housing"
                          type="checkbox"
                        />

                        <Form.Check
                          inline
                          name="Housing allowance"
                          label="Housing allowance"
                          type="checkbox"
                        />

                        <Form.Check
                          inline
                          name="Visa costs reimbursement"
                          label="Visa costs reimbursement"
                          type="checkbox"
                        />

                        <Form.Check
                          inline
                          name="Flight reimbursement"
                          label="Flight reimbursement"
                          type="checkbox"
                        />

                        <Form.Check
                          inline
                          name="Paid winter or summer"
                          label="Paid winter or summer"
                          type="checkbox"
                        />

                        <Form.Check
                          inline
                          name="Annual salary increase"
                          label="Annual salary increase"
                          type="checkbox"
                        />

                        <Form.Check
                          inline
                          name="Bonus (any kind)"
                          label="Bonus (any kind)"
                          type="checkbox"
                        />
                      </div>
                    </Form.Group>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <PrimaryText size="1.5rem" weight="400">
                    School support
                  </PrimaryText>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          Did the school offer assistance with getting a Z visa
                          and a work permit?
                        </PrimaryText>
                      </Form.Label>
                      <Form.Select
                        name="visahelp"
                        value={visahelp}
                        onChange={(e) => onChange(e)}
                        required
                      >
                        <option>Yes</option>
                        <option>No</option>
                        <option>N.A.</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          Did the school bear the cost of legal expenses?
                        </PrimaryText>
                      </Form.Label>
                      <Form.Select
                        name="legalexpenses"
                        value={legalexpenses}
                        onChange={(e) => onChange(e)}
                        required
                      >
                        <option>
                          The school covered all expenses incurred in the
                          process of hiring me
                        </option>
                        <option>
                          The school covered some of the expenses incurred in
                          the process of hiring me
                        </option>
                        <option>
                          The school didn't cover any of the expenses
                        </option>
                        <option>N.A.</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          Did the school offer assistance finding suitable
                          accommodation?
                        </PrimaryText>
                      </Form.Label>
                      <Form.Select
                        name="accommodation"
                        value={accommodation}
                        onChange={(e) => onChange(e)}
                        required
                      >
                        <option>Yes</option>
                        <option>No</option>
                        <option>N.A.</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          Did the school offer opportunities for advancement and
                          promotion?
                        </PrimaryText>
                      </Form.Label>
                      <Form.Select
                        name="career"
                        value={career}
                        onChange={(e) => onChange(e)}
                        required
                      >
                        <option>Yes</option>
                        <option>No</option>
                        <option>N.A.</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <PrimaryText size="1.5rem" weight="400">
                    Rate the school
                  </PrimaryText>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          Work/Life balance
                        </PrimaryText>
                      </Form.Label>

                      <div class="radio-buttons" onChange={(e) => onRate(e)}>
                        <Form.Check
                          inline
                          type="radio"
                          name="balance"
                          id="balance-1"
                          value="1"
                          label="1"
                        />

                        <Form.Check
                          inline
                          type="radio"
                          name="balance"
                          id="balance-2"
                          value="2"
                          label="2"
                        />

                        <Form.Check
                          inline
                          type="radio"
                          name="balance"
                          id="balance-3"
                          value="3"
                          label="3"
                        />

                        <Form.Check
                          inline
                          type="radio"
                          name="balance"
                          id="balance-4"
                          value="4"
                          label="4"
                        />

                        <Form.Check
                          inline
                          type="radio"
                          name="balance"
                          id="balance-5"
                          value="5"
                          label="5"
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          Work Environment
                        </PrimaryText>
                      </Form.Label>

                      <div class="radio-buttons" onChange={(e) => onRate(e)}>
                        <Form.Check
                          inline
                          type="radio"
                          name="workplace"
                          id="workplace-1"
                          value="1"
                          label="1"
                        />

                        <Form.Check
                          inline
                          type="radio"
                          name="workplace"
                          id="workplace-2"
                          value="2"
                          label="2"
                        />

                        <Form.Check
                          inline
                          type="radio"
                          name="workplace"
                          id="workplace-3"
                          value="3"
                          label="3"
                        />

                        <Form.Check
                          inline
                          type="radio"
                          name="workplace"
                          id="workplace-4"
                          value="4"
                          label="4"
                        />

                        <Form.Check
                          inline
                          type="radio"
                          name="workplace"
                          id="workplace-5"
                          value="5"
                          label="5"
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          Management
                        </PrimaryText>
                      </Form.Label>

                      <div class="radio-buttons" onChange={(e) => onRate(e)}>
                        <Form.Check
                          inline
                          type="radio"
                          name="management"
                          id="management-1"
                          value="1"
                          label="1"
                        />

                        <Form.Check
                          inline
                          type="radio"
                          name="management"
                          id="management-2"
                          value="2"
                          label="2"
                        />

                        <Form.Check
                          inline
                          type="radio"
                          name="management"
                          id="management-3"
                          value="3"
                          label="3"
                        />

                        <Form.Check
                          inline
                          type="radio"
                          name="management"
                          id="management-4"
                          value="4"
                          label="4"
                        />

                        <Form.Check
                          inline
                          type="radio"
                          name="management"
                          id="management-5"
                          value="5"
                          label="5"
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          Benefits and perks
                        </PrimaryText>
                      </Form.Label>

                      <div class="radio-buttons" onChange={(e) => onRate(e)}>
                        <Form.Check
                          inline
                          type="radio"
                          name="benefits"
                          id="benefits-1"
                          value="1"
                          label="1"
                        />

                        <Form.Check
                          inline
                          type="radio"
                          name="benefits"
                          id="benefits-2"
                          value="2"
                          label="2"
                        />

                        <Form.Check
                          inline
                          type="radio"
                          name="benefits"
                          id="benefits-3"
                          value="3"
                          label="3"
                        />

                        <Form.Check
                          inline
                          type="radio"
                          name="benefits"
                          id="benefits-4"
                          value="4"
                          label="4"
                        />

                        <Form.Check
                          inline
                          type="radio"
                          name="benefits"
                          id="benefits-5"
                          value="5"
                          label="5"
                        />
                      </div>
                    </Form.Group>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <PrimaryText size="1.5rem" weight="400">
                    Leave your comments
                  </PrimaryText>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          What are the pros of working for this school?
                        </PrimaryText>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="pros"
                        value={pros}
                        onChange={(e) => onChange(e)}
                        placeholder=""
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          What are the cons of working for this school?
                        </PrimaryText>
                      </Form.Label>
                      <Form.Control
                        name="cons"
                        value={cons}
                        onChange={(e) => onChange(e)}
                        placeholder=""
                        required
                        as="textarea"
                        rows={3}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          Leave your comments on the school below - feel free to
                          write at length
                        </PrimaryText>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="comments"
                        value={comments}
                        onChange={(e) => onChange(e)}
                        placeholder=""
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          Would you recommend working here to a friend?
                        </PrimaryText>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="recommend"
                        value={recommend}
                        onChange={(e) => onChange(e)}
                        placeholder=""
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <PrimaryText size="1.2rem" weight="400">
                          Do you have any advice for the management?
                        </PrimaryText>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="advice"
                        value={advice}
                        onChange={(e) => onChange(e)}
                        placeholder=""
                        required
                      />
                    </Form.Group>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="d-grid p-5">
              <PrimaryButton type="submit" fontSize="1.5rem">
                Leave your comments
              </PrimaryButton>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

ReviewForm.propTypes = {
  addReview: PropTypes.func.isRequired,
};

export default connect(null, { addReview })(ReviewForm);
