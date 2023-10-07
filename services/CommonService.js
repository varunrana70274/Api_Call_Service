/* eslint-disable prettier/prettier */
import {toast} from 'react-toastify';
import $ from 'jquery';
export const CommonService = {
  checkForValidFile,
};

function checkForValidFile(event, docType) {
  let isValidExtension = true;
  if (!event.fileSelector.files || event.fileSelector.files.length == 0) {
    return isValidExtension;
  }
  let file = event.fileSelector.files[0];
  var filePath = file.name;
  var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
  var FileSize = file.size / 1024;
  if (docType == 'DOC') {
    allowedExtensions =
      /(\.jpg|\.jpeg|\.png|\.pdf|\.doc|\.docx|\.xls|\.xlsx)$/i;
    if (FileSize > 400) {
      toast.dismiss();
      toast.error('Document cannot be greater than 400 KB');
      return (isValidExtension = false);
    }
  }
  if (docType == 'EXCEL') {
    allowedExtensions = /(\.xls|\.xlsx)$/i;
  }
  if (docType == 'DOCUMENT') {
    allowedExtensions = /(\.jpg|\.jpeg|\.png|\.pdf)$/i;
    if (FileSize > 500) {
      toast.dismiss();
      toast.error('Document cannot be greater than 500 KB');
      return (isValidExtension = false);
    }
  }
  if (docType == 'PHOTO') {
    allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (FileSize > 200) {
      toast.dismiss();
      toast.error('Image cannot be greater than 200 KB');
      return (isValidExtension = false);
    }
  }

  if (!allowedExtensions.exec(filePath)) {
    isValidExtension = false;
  }

  if (!isValidExtension) {
    toast.dismiss();
    toast.error('Please select valid image');
    $(event.fileSelector).val('');
  }
  return isValidExtension;
}
