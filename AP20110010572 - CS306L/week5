%{
	#include<stdio.h>
        #include<string.h>
	int i=0,j=0,count=0,n=0,com=0,scom=0;
	char ch[20][20];
	int look_up(char ch[20][20],char *id,int n);
%}
digit [0-9]*
id [a-zA-Z][a-zA-Z0-9]*
num [0-9]\.[0-9]
%%
\n {scom=0;n++;}
"//" {scom=1;fprintf(yyout,"\n single line comments \n\n");}
"/*" {com=1;fprintf(yyout,"\n multi line comment start \n");}
"*/" {com=0;fprintf(yyout,"\n multi line comment ends \n");}
int |
char |
double |
void {if(!com&&!scom) fprintf(yyout," \n %s \t is keyword",yytext);}
"<=" {if (!com&&!scom) fprintf(yyout,"\n %s \t is Relational operator Lessthan or Equal to. ",yytext);}
"<" {if(!com&&!scom) fprintf(yyout,"\n %s \t is Relational operator Lessthan. ",yytext);}
">=" {if(!com) fprintf(yyout,"\n %s \t is Relational operator Greaterthan or Equal to. ",yytext);}
">" {if(!com&&!scom) fprintf(yyout,"\n %s \t is Relational operator Greaterthan. ",yytext);}
"==" {if(!com&&!scom) fprintf(yyout,"\n %s \t is Relational operator Equal to. ",yytext);}
"!=" {if (!com&&!scom) fprintf(yyout,"\n %s \t is Relational operator Not Equal to. ",yytext);}
"=" {fprintf(yyout,"\n %s \t is Assignment operator. ",yytext);}
{id} {fprintf(yyout,"\n %s \t is identifier. ",yytext);
	if (!lookup(ch,yytext,i)){
		strcpy(ch[i++],yytext);count++;}
}
{num} {fprintf(yyout,"\n %s \t is floating point number. ",yytext);}
{digit} {fprintf(yyout,"\n %s \t is digit",yytext);}
%%
main(int argc, char **argv)
{
	yyin=fopen(argv[1],"r");
	yyin =fopen("read.txt","r");
	yyout=fopen("write.txt","w");
	yylex();
	printf(" Number of Identifiers are : %d ",count);
	printf("\n The contents of symbol table are :\n");
	for(j=0;j<i;j++)
		printf("\n %s",ch[j]);
	printf(" \n\n\n no of lines = %d\n\n",n);
	return 0;
}
int lookup(char ch[10][10],char *id,int n)
{
	for(j=0;j<n;j++)
	if(!strcmp(ch[j],id))
	return 1;
	return 0;
}
int yywrap()
{
return 1;
}
