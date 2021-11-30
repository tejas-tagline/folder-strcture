import { Component, OnInit } from '@angular/core';
import { NodeModel } from 'src/app/models/node.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  folderList: NodeModel[] = [];
  isAddRootFolder: boolean = false;
  isAddFolder: boolean = false;
  isAddNode: boolean = false;
  selectedFileType!: 'folder' | 'file' | 'unset' | null;
  imgsrc!: string;

  constructor() {}

  ngOnInit(): void {}

  showInput(): void {
    this.isAddRootFolder = !this.isAddRootFolder;
  }

  addRootFolder(name: string): void {
    if (name) this.folderList.push({ type: 'file', name: name });
    this.isAddRootFolder = false;
  }

  manageNode(type: string): void {
    switch (type) {
      case 'add':
        this.isAddNode = true;
        break;
      case 'remove':
        this.folderList = [];
        break;
      case 'default':
        break;
    }
  }

  addNodeFileFolder(name: string): void {
    if (name) {
      let arr: NodeModel[] = [];
      arr.push({ name: name, type: this.selectedFileType });
      if (!this.folderList[0].children) {
        this.folderList[0].children = arr;
      } else {
        this.folderList[0].children.push({
          name: name,
          type: this.selectedFileType,
        });
      }
    }
    this.isAddFolder = false;
    this.isAddNode = false;
  }

  addFile(type: 'folder' | 'file' | 'unset' | null): void {
    this.isAddFolder = true;
    this.selectedFileType = type;
    this.imgsrc =
      type === 'file'
        ? 'assets/file-regular.svg'
        : 'assets/folder-open-regular.svg';
  }
}
