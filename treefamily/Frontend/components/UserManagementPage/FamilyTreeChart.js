import React, { Component } from "react";
import FamilyTree from "./familytree";

FamilyTree.templates.base.defs = `<g transform="matrix(0.05,0,0,0.05,-12,-9)" id="heart">
        <path fill="#aeaeae" d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909  l-8.431-8.909C181.284,5.762,98.663,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778 c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654 c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z"/>
        </g>
     <g transform="matrix(1,0,0,1,0,0)" id="dot"></g>
      <g id="base_node_menu" style="cursor:pointer;">
          <rect x="0" y="0" fill="transparent" width="22" height="22"></rect>
          <circle cx="4" cy="11" r="2" fill="#b1b9be"></circle>
          <circle cx="11" cy="11" r="2" fill="#b1b9be"></circle>
          <circle cx="18" cy="11" r="2" fill="#b1b9be"></circle>
      </g>
      <g style="cursor: pointer;" id="base_tree_menu">
          <rect x="0" y="0" width="25" height="25" fill="transparent"></rect>
          ${FamilyTree.icon.addUser(25, 25, "#fff", 0, 0)}
      </g>
      <g style="cursor: pointer;" id="base_tree_menu_close">
          <circle cx="12.5" cy="12.5" r="12" fill="#F57C00"></circle>
          ${FamilyTree.icon.close(25, 25, "#fff", 0, 0)}
      </g>
      <g id="base_up">
          <circle cx="115" cy="30" r="15" fill="#fff" stroke="#b1b9be" stroke-width="1"></circle>
          ${FamilyTree.icon.ft(20, 80, "#b1b9be", 105, -10)}
      </g>
      <clipPath id="base_img_0">
        <circle id="base_img_0_stroke" cx="45" cy="62" r="35"/>
      </clipPath>
      <clipPath id="base_img_1">
        <circle id="base_img_1_stroke" cx="100" cy="62" r="35"/>
      </clipPath>
      `;

FamilyTree.templates.main = Object.assign({}, FamilyTree.templates.base);
FamilyTree.templates.main.defs = `<style>
                                        .{randId} .bft-edit-form-header, .{randId} .bft-img-button{
                                            background-color: #aeaeae;
                                        }
                                        .{randId}.male .bft-edit-form-header, .{randId}.male .bft-img-button{
                                            background-color: #6bb4df;
                                        }
                                        .{randId}.male div.bft-img-button:hover{
                                            background-color: #cb4aaf;
                                        }
                                        .{randId}.female .bft-edit-form-header, .{randId}.female .bft-img-button{
                                            background-color: #cb4aaf;
                                        }
                                        .{randId}.female div.bft-img-button:hover{
                                            background-color: #6bb4df;
                                        }
    </style>`;
FamilyTree.templates.main.node =
  '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffffff" stroke-width="3" stroke="#ccc" rx="5" ry="5"></rect>' +
  '<rect x="0" y="0" height="20" width="{w}" fill="#b1b9be" stroke-width="1" stroke="#b1b9be" rx="5" ry="5"></rect>' +
  '<line x1="0" y1="20" x2="250" y2="20" stroke-width="5" stroke="#b1b9be"></line>';

FamilyTree.templates.main.field_0 =
  "<text " +
  FamilyTree.attr.width +
  ' ="250" style="font-size: 14px; font-weight: 700" font-variant="Lucida Bright" fill="white" x="125" y="16" text-anchor="middle">{val}</text>';
FamilyTree.templates.main.field_1 =
  "<text " +
  FamilyTree.attr.width +
  ' ="160" data-text-overflow="multiline" style="font-size: 18px; font-weight: 700 ;font-family: Lucida Bright;" fill="black" x="100" y="66" text-anchor="start">{val}</text>';
FamilyTree.templates.main.field_2 =
  "<text " +
  FamilyTree.attr.width +
  ' ="160" style="font-size: 10px; font-weight: 700 ; opacity:0.7" fill="black" x="100" y="95"  text-anchor="start">{val}</text>';
FamilyTree.templates.main.field_3 =
  "<text " +
  FamilyTree.attr.width +
  ' ="60" style="font-size: 12px; font-weight: 700" fill="black" x="47" y="112" text-anchor="middle">{val}</text>';

FamilyTree.templates.main.field_4 =
  "<text " +
  FamilyTree.attr.width +
  ' ="60" style="font-size: 12px;" fill="black" x="47" y="112" text-anchor="middle">{val}</text>';
FamilyTree.templates.main.img_0 = `<use xlink:href="#base_img_0_stroke" />
       <circle id="base_img_0_stroke" fill="#b1b9be" cx="45" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_0)" xlink:href="{val}" x="10" y="26" width="72" height="72"></image>`;
FamilyTree.templates.main_male = Object.assign({}, FamilyTree.templates.main);
FamilyTree.templates.main_male.node =
  '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffffff" stroke-width="3" stroke="url(#hugos_grad_male)" rx="5" ry="5"></rect>' +
  '<rect x="0" y="0" height="20" width="{w}" fill="url(#hugos_grad_male)" stroke-width="1" stroke="url(#hugos_grad_male)" rx="5" ry="5"></rect>' +
  '<line x1="0" y1="20" x2="250" y2="20" stroke-width="5" stroke="url(#hugos_grad_male)"></line>';
FamilyTree.templates.main_male.img_0 = `<use xlink:href="#base_img_0_stroke" />
       <circle id="base_img_0_stroke" fill="#6bb4df" cx="45" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_0)" xlink:href="{val}" x="10" y="26" width="72" height="72"></image>`;
FamilyTree.templates.main_male_child = Object.assign(
  {},
  FamilyTree.templates.main_male
);
FamilyTree.templates.main_male_child.link =
  '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="{rounded}" />';

FamilyTree.templates.main_female = Object.assign(
  {},
  FamilyTree.templates.main_male
);
FamilyTree.templates.main_female.node =
  '<rect x="0" y="0" height="{h}" width="{w}" background: "rgb(34,193,195)" fill="#fff" stroke-width="3" stroke="url(#hugo_grad_female)" rx="5" ry="5"></rect>' +
  '<rect x="0" y="0" height="20" width="{w}" fill="url(#hugo_grad_female)" stroke-width="1" stroke="url(#hugo_grad_female)" rx="5" ry="5"></rect>' +
  '<line x1="0" y1="20" x2="250" y2="20" stroke-width="5" stroke="url(#hugo_grad_female)"></line>';
FamilyTree.templates.main_female.img_0 = `<use xlink:href="#base_img_0_stroke" />
       <circle id="base_img_0_stroke" fill="#cb4aaf" cx="45" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_0)" xlink:href="{val}" x="10" y="26" width="72" height="72"></image>`;
FamilyTree.templates.main_female_child = Object.assign(
  {},
  FamilyTree.templates.main_female
);
FamilyTree.templates.main_female_child.link =
  '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="{rounded}" />';

FamilyTree.templates.single = Object.assign({}, FamilyTree.templates.tommy);
FamilyTree.templates.single.size = [200, 200];
FamilyTree.templates.single.defs = `<style>
                                        .{randId} .bft-edit-form-header, .{randId} .bft-img-button{
                                            background-color: #aeaeae;
                                        }
                                        .{randId}.male .bft-edit-form-header, .{randId}.male .bft-img-button{
                                            background-color: #6bb4df;
                                        }
                                        .{randId}.male div.bft-img-button:hover{
                                            background-color: #cb4aaf;
                                        }
                                        .{randId}.female .bft-edit-form-header, .{randId}.female .bft-img-button{
                                            background-color: #cb4aaf;
                                        }
                                        .{randId}.female div.bft-img-button:hover{
                                            background-color: #6bb4df;
                                        }
    </style>`;
FamilyTree.templates.single.node =
  '<circle cx="100" cy="100" r="100" fill="white" stroke-width="1" stroke="#aeaeae"></circle>';
FamilyTree.templates.single.field_0 =
  "<text " +
  FamilyTree.attr.width +
  ' ="160" style="font-size: 14px;" font-variant="all-small-caps"  font-weight="bold" fill="black" x="100" y="115" text-anchor="middle">{val}</text>';
FamilyTree.templates.single.field_1 =
  "<text " +
  FamilyTree.attr.width +
  ' ="190" data-text-overflow="multiline" style="font-size: 16px;" fill="black" x="100" y="135" text-anchor="middle">{val}</text>';
FamilyTree.templates.single.field_3 =
  "<text " +
  FamilyTree.attr.width +
  ' ="60" style="font-size: 12px;" fill="black" x="100" y="180" text-anchor="middle">{val}</text>';
FamilyTree.templates.single.nodeMenuButton = `<use ${FamilyTree.attr.control_node_menu_id}="{id}" x="89" y="5" xlink:href="#base_node_menu" />`;
FamilyTree.templates.single_male = Object.assign(
  {},
  FamilyTree.templates.single
);
FamilyTree.templates.single_male.node =
  '<circle cx="100" cy="100" r="100" fill="white" stroke-width="3" stroke="#6bb4df" ></circle>';
FamilyTree.templates.single_male.img_0 = `<use xlink:href="#base_img_1_stroke"/>
       <circle id="base_img_1_stroke" fill="#6bb4df" cx="100" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_1)" xlink:href="{val}" x="65" y="26" width="72" height="72"></image>`;
FamilyTree.templates.single_female = Object.assign(
  {},
  FamilyTree.templates.single_male
);
FamilyTree.templates.single_female.node =
  '<circle cx="100" cy="100" r="100" fill="white" stroke-width="3" stroke="#cb4aaf" ></circle>';
FamilyTree.templates.single_female.img_0 = `<use xlink:href="#base_img_1_stroke"/>
       <circle id="base_img_1_stroke" fill="#cb4aaf" cx="100" cy="62" r="37"/>
      <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_1)" xlink:href="{val}" x="65" y="26" width="72" height="72"></image>`;

FamilyTree.templates.family_single_male = Object.assign(
  {},
  FamilyTree.templates.single_male
);
FamilyTree.templates.family_single_male.link =
  '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="{rounded}" />';
FamilyTree.templates.family_single_female = Object.assign(
  {},
  FamilyTree.templates.single_female
);
FamilyTree.templates.family_single_female.link =
  '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="{rounded}" />';

export default class FamilyTreeChart extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.family = new FamilyTree(this.divRef.current, {
      nodes: this.props.nodes,
      // template: "main",
      scaleInitial: FamilyTree.match.boundary,
      mouseScrool: FamilyTree.action.zoom,
      miniMap: true,
      mixedHierarchyNodesSeparation: 50,
      template: "main",
      padding: 40,

      nodeMenu: {
        details: { text: "Details" },
      },
      toolbar: {
        // layout: true,
        zoom: true,
        fit: true,
        expandAll: false,
        fullScreen: true,
      },
      // layout: FamilyTree.layout.treeLeftOffset,

      align: FamilyTree.align.center,
      anim: { func: FamilyTree.anim.outBack, duration: 500 },
      nodeBinding: {
        field_0: "role",
        field_2: "bdate",
        field_1: "name",
        field_3: "career",
        // field_4: "ddate",
        img_0: "img",

        // enableSearch: false,
      },

      editForm: {
        buttons: {
          edit: null,
          share: {
            icon: FamilyTree.icon.share(24, 24, "#fff"),
            text: "Share",
          },
          pdf: {
            icon: FamilyTree.icon.pdf(24, 24, "#fff"),
            text: "Save as PDF",
          },
        },
      },
      zoom: { speed: 130, smooth: 10 },
    });

    this.family.on("render-link", function (sender, args) {
      if (args.cnode.ppid != undefined) {
        args.html +=
          '<use  xlink:href="#heart"  x="' +
          args.p.xa +
          '" y="' +
          args.p.ya +
          '" />';
      }
    });
  }

  render() {
    return <div id="tree" ref={this.divRef}></div>;
  }
}
