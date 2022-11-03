import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { delete_product, edit_product } from "../redux/Action/ProductAction";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const ProductCard = ({ prod }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispacth = useDispatch();
  const [image, setImage] = useState(prod.image);
  const [price, setPrice] = useState(prod.price);
  const [prodName, setProd] = useState(prod.prodName);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(edit_product(prod._id, { image, prodName, price }));
    handleClose();
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.image} />
        <Card.Body>
          <Card.Title>{prod.prodName}</Card.Title>

          <Button variant="primary">{prod.price}</Button>
          <Button
            variant="danger"
            onClick={() => dispacth(delete_product(prod._id))}
          >
            Delte
          </Button>
          <Button variant="warning" onClick={handleShow}>
            EDIT
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Product name"
                    onChange={(e) => setProd(e.target.value)}
                    value={prodName}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>price</Form.Label>
                  <Form.Control
                    type="Number"
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter image URL"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="warning " onClick={handleSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
