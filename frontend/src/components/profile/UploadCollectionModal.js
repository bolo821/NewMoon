import React, { useState } from "react";
import './index.scss';
import { Modal } from 'react-bootstrap';
import Button from 'components/share/Button';
import Input from "./Input";
import Select from './Select';
import Slider from "./Slider";
import File from "./File";

const UploadCollectionModal = props => {
    const { showModal, setShowModal } = props;
    const [ name, setName ] = useState('');
    const [ loyalty, setLoyalty ] = useState(15);
    const [ description, setDescription ] = useState('');
    const [ quantity, setQuantity ] = useState(5000);
    const [ file, setFile ] = useState(null);
    const [ selectData ] = useState([
        { value: 'BESARCARD (BSKXDRFNFT-15bf0c)', text: 'BESARCARD (BSKXDRFNFT-15bf0c)' },
        { value: 'BESARCARD (BSKXDRFNFT-15bf0d)', text: 'BESARCARD (BSKXDRFNFT-15bf0d)' },
        { value: 'BESARCARD (BSKXDRFNFT-15bf0e)', text: 'BESARCARD (BSKXDRFNFT-15bf0e)' },
        { value: 'BESARCARD (BSKXDRFNFT-15bf0f)', text: 'BESARCARD (BSKXDRFNFT-15bf0f)' },
        { value: 'BESARCARD (BSKXDRFNFT-15bf0g)', text: 'BESARCARD (BSKXDRFNFT-15bf0g)' },
    ]);

    return (
        <Modal
            show={showModal}
            onHide={() => {setShowModal(false)}}
            keyboard={false}
            className='upload-modal-rt'
            centered
        >
            <h3>Upload collection</h3>
            <div className="form-element-name">
                <Input label="Name" value={name} onChange={setName} placeholder="Beskar Card" />
            </div>
            <div className="form-element-ticker">
                <Select label="Ticker"  onChange={() => {}} options={selectData} />
            </div>
            <div className="form-element-royalties">
                <Input label="Royalties (%)" value={loyalty}  onChange={setLoyalty} placeholder={15} type="number" />
            </div>
            <div className="form-element-slider">
                <Slider value={loyalty} setValue={setLoyalty} />
            </div>
            <div className="recommend">
                <span>We recommend that royalties be set between 0% and 10%</span>
            </div>
            <div className="form-element-name">
                <Input label="Description" value={description}  onChange={setDescription} placeholder='Poker game membership card' />
            </div>
            <div className="form-element-name">
                <Input label="Quantity" value={quantity}  onChange={setQuantity} placeholder={5000} type="number" />
            </div>
            <div className="form-element-file">
                <label>File</label>
                <File onFileSelect={setFile} />
                <p>Accept formats: <span>png, jpg, jpeg, gif, mp4, avi, webm</span></p>
            </div>
            <div className="action">
                <Button color="theme-primary" onClick={() => setShowModal(false)}>
                    Mint NFT   1/2
                </Button>
                <span onClick={() => setShowModal(false)}>
                    Cancel
                </span>
            </div>
        </Modal>
    )
}

export default UploadCollectionModal;