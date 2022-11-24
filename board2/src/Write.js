import { Component } from "react";
import Form from "react-bootstrap/Form";

/**
 * Write class
 */
class Write extends Component {
  /**
   * @return {Component} Component
   */
  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>제목</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>내용</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
        </Form>
        <button variant="info">작성완료</button>
        <button variant="secondary">취소</button>
      </div>
    );
  }
}

export default Write;
