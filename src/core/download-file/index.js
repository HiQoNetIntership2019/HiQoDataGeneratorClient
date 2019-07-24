import FileSaver from 'file-saver';

export default file => {
  FileSaver.saveAs(file.data, file.name + '.' + file.extension);
};
